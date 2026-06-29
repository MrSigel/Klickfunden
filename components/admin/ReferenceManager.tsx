"use client";

import { ChangeEvent, DragEvent, FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ImagePlus, Loader2, Plus, Star } from "lucide-react";
import { createReference } from "@/app/actions/references";
import { uploadAsset } from "@/app/actions/uploadAsset";
import type { Database } from "@/lib/supabase/types";

type ReferenzRow = Database["public"]["Tables"]["referenzen"]["Row"];

type ReferenceManagerProps = {
  initialReferences: ReferenzRow[];
};

function normalizeUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export default function ReferenceManager({
  initialReferences,
}: ReferenceManagerProps) {
  const [title, setTitle] = useState("");
  const [result, setResult] = useState("");
  const [href, setHref] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageName, setImageName] = useState("");
  const [references, setReferences] =
    useState<ReferenzRow[]>(initialReferences);
  const [message, setMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const normalizedHref = useMemo(() => normalizeUrl(href), [href]);

  const uploadReferenceImage = async (file: File) => {
    setMessage("");
    setIsUploading(true);

    const formData = new FormData();
    formData.set("bucket", "public-assets");
    formData.set("file", file);

    const uploadResult = await uploadAsset(formData);
    setIsUploading(false);

    if (!uploadResult.ok) {
      setMessage(uploadResult.message);
      return;
    }

    if (!uploadResult.publicUrl) {
      setMessage("Der öffentliche Bildlink konnte nicht erzeugt werden.");
      return;
    }

    setImageUrl(uploadResult.publicUrl);
    setImageName(file.name);
    setMessage("Bild wurde erfolgreich in Supabase Storage hochgeladen.");
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    await uploadReferenceImage(file);
  };

  const handleDrop = async (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (!file) {
      return;
    }

    await uploadReferenceImage(file);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !result.trim() || !normalizedHref) {
      setMessage("Bitte Titel, Ergebnis und URL vollständig ausfüllen.");
      return;
    }

    setIsSaving(true);
    setMessage("");

    const saveResult = await createReference({
      title,
      result,
      url: normalizedHref,
      imageUrl,
    });

    setIsSaving(false);

    if (!saveResult.ok) {
      setMessage(saveResult.message);
      return;
    }

    setReferences((items) => [saveResult.reference, ...items]);
    setTitle("");
    setResult("");
    setHref("");
    setImageUrl(null);
    setImageName("");
    setMessage("Referenz wurde in Supabase gespeichert und ist für die Startseite verfügbar.");
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        onSubmit={handleSubmit}
        className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-marsgreen/15 text-marsgreen">
          <Star className="h-5 w-5" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-semibold text-white">
          Neue Referenz anlegen
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-mist-100/80">
          Erfasst werden nur echte Case Studies mit prüfbarer URL. Bilder werden
          direkt in den öffentlichen Supabase-Bucket hochgeladen.
        </p>

        <div className="mt-7 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-mist-100/85">
              Titel
            </label>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-ink-700/70 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-mist-100/75 focus:border-marsgreen"
              placeholder="z. B. Local SEO für Handwerksbetrieb"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-mist-100/85">
              Ergebnis
            </label>
            <input
              value={result}
              onChange={(event) => setResult(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-ink-700/70 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-mist-100/75 focus:border-marsgreen"
              placeholder="z. B. +140% KI-Sichtbarkeit"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-mist-100/85">
              Live-URL
            </label>
            <input
              value={href}
              onChange={(event) => setHref(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-ink-700/70 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-mist-100/75 focus:border-marsgreen"
              placeholder="https://www.kunde.de"
            />
          </div>

          <label
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
            className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-marsgreen/35 bg-marsgreen/10 px-5 py-7 text-center transition-colors hover:bg-marsgreen/15"
          >
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              onChange={handleFileChange}
              className="sr-only"
            />
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900/70 text-marsgreen">
              {isUploading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <ImagePlus className="h-5 w-5" />
              )}
            </span>
            <span className="mt-4 text-sm font-semibold text-white">
              {isUploading
                ? "Bild wird hochgeladen"
                : "Screenshot auswählen oder hier ablegen"}
            </span>
            <span className="mt-2 text-xs leading-relaxed text-mist-100/75">
              Erlaubt sind PNG, JPG, WebP oder GIF bis 5 MB.
            </span>
          </label>

          {imageUrl && (
            <div className="rounded-2xl border border-white/10 bg-ink-700/50 p-3">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-ink-900">
                <Image
                  src={imageUrl}
                  alt="Vorschau des hochgeladenen Referenzbildes"
                  fill
                  sizes="(min-width: 1280px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 break-words text-xs text-mist-100/80">
                {imageName}
              </p>
            </div>
          )}
        </div>

        {message && (
          <p className="mt-5 rounded-xl border border-marsgreen/25 bg-marsgreen/10 px-4 py-3 text-sm text-mist-100/90">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={isUploading || isSaving}
          className="btn-primary mt-7 w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSaving ? "Referenz wird gespeichert" : "Referenz hinzufügen"}
          {isSaving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </button>
      </motion.form>

      <div className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              Gespeicherte Referenzen
            </h2>
            <p className="mt-2 text-sm text-mist-100/80">
              Diese Einträge kommen direkt aus der Supabase-Tabelle
              „referenzen“.
            </p>
          </div>
          <span className="rounded-full border border-marsgreen/25 bg-marsgreen/10 px-3 py-1 text-sm font-semibold text-marsgreen">
            {references.length}
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {references.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-ink-700/50 p-5 text-sm text-mist-100/80">
              Noch keine Referenzen in Supabase gespeichert.
            </div>
          ) : (
            references.map((reference) => (
              <div
                key={reference.id}
                className="rounded-2xl border border-white/10 bg-ink-700/50 p-5"
              >
                {reference.image_url && (
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl bg-ink-900">
                    <Image
                      src={reference.image_url}
                      alt={`Screenshot zur Referenz ${reference.title}`}
                      fill
                      sizes="(min-width: 1280px) 480px, 90vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="break-words font-display text-lg font-semibold text-white">
                      {reference.title}
                    </h3>
                    <p className="mt-2 text-xl font-bold text-marsgreen">
                      {reference.result}
                    </p>
                  </div>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-marsgreen/30 bg-marsgreen/10 text-marsgreen hover:bg-marsgreen hover:text-ink-900"
                    aria-label={`${reference.title} öffnen`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
