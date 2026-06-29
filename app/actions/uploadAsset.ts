"use server";

import { assertAdminSession } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export type UploadBucket = "public-assets" | "private-documents";

export type UploadAssetResult =
  | {
      ok: true;
      bucket: UploadBucket;
      path: string;
      publicUrl: string | null;
    }
  | { ok: false; message: string };

const maxFileSizes: Record<UploadBucket, number> = {
  "public-assets": 5 * 1024 * 1024,
  "private-documents": 10 * 1024 * 1024,
};

const allowedTypes: Record<UploadBucket, string[]> = {
  "public-assets": ["image/jpeg", "image/png", "image/webp", "image/gif"],
  "private-documents": [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/webp",
  ],
};

function sanitizeFileName(name: string) {
  const parts = name.toLowerCase().split(".");
  const extension = parts.length > 1 ? parts.pop() : "bin";
  const baseName = parts
    .join(".")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

  return `${baseName || "datei"}.${extension}`;
}

export async function uploadAsset(formData: FormData): Promise<UploadAssetResult> {
  assertAdminSession();

  const bucket = formData.get("bucket");
  const file = formData.get("file");

  if (bucket !== "public-assets" && bucket !== "private-documents") {
    return { ok: false, message: "Ungültiger Speicherbereich." };
  }

  if (!(file instanceof File)) {
    return { ok: false, message: "Bitte wähle eine Datei aus." };
  }

  if (file.size <= 0) {
    return { ok: false, message: "Die ausgewählte Datei ist leer." };
  }

  if (file.size > maxFileSizes[bucket]) {
    const sizeInMb = Math.round(maxFileSizes[bucket] / 1024 / 1024);
    return {
      ok: false,
      message: `Die Datei ist zu groß. Erlaubt sind maximal ${sizeInMb} MB.`,
    };
  }

  if (!allowedTypes[bucket].includes(file.type)) {
    return {
      ok: false,
      message: "Dieser Dateityp ist für den gewählten Speicherbereich nicht erlaubt.",
    };
  }

  const folder = bucket === "public-assets" ? "referenzen" : "dokumente";
  const path = `${folder}/${crypto.randomUUID()}-${sanitizeFileName(file.name)}`;
  const supabase = getSupabaseAdmin();

  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: bucket === "public-assets" ? "31536000" : "3600",
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return {
      ok: false,
      message: `Upload fehlgeschlagen: ${error.message}`,
    };
  }

  const publicUrl =
    bucket === "public-assets"
      ? supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl
      : null;

  return {
    ok: true,
    bucket,
    path,
    publicUrl,
  };
}
