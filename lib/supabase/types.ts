export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          telefon: string;
          website: string;
          form_data: Json;
          status: "Neu" | "Qualifiziert" | "In Kunde umgewandelt" | "Archiviert";
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          telefon: string;
          website: string;
          form_data?: Json;
          status?: "Neu" | "Qualifiziert" | "In Kunde umgewandelt" | "Archiviert";
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          telefon?: string;
          website?: string;
          form_data?: Json;
          status?: "Neu" | "Qualifiziert" | "In Kunde umgewandelt" | "Archiviert";
        };
        Relationships: [];
      };
      kunden: {
        Row: {
          id: string;
          created_at: string;
          lead_id: string | null;
          company_name: string;
          contact_person: string;
          email: string;
          telefon: string;
          website: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          lead_id?: string | null;
          company_name: string;
          contact_person: string;
          email: string;
          telefon: string;
          website: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          lead_id?: string | null;
          company_name?: string;
          contact_person?: string;
          email?: string;
          telefon?: string;
          website?: string;
        };
        Relationships: [
          {
            foreignKeyName: "kunden_lead_id_fkey";
            columns: ["lead_id"];
            referencedRelation: "leads";
            referencedColumns: ["id"];
          },
        ];
      };
      referenzen: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          result: string;
          url: string;
          image_url: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          result: string;
          url: string;
          image_url?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          result?: string;
          url?: string;
          image_url?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
