import "server-only";

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/types";

type SupabaseDatabaseClient = SupabaseClient<Database>;

let adminClient: SupabaseDatabaseClient | null = null;
let anonClient: SupabaseDatabaseClient | null = null;

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Supabase-Konfiguration fehlt: ${name}`);
  }
  return value;
}

export function getSupabaseAdmin() {
  if (!adminClient) {
    adminClient = createClient<Database>(
      requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
      requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );
  }

  return adminClient;
}

export function getSupabaseAnon() {
  if (!anonClient) {
    anonClient = createClient<Database>(
      requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
      requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );
  }

  return anonClient;
}
