export type AdminLeadStatus = "Neu" | "Qualifiziert" | "In Kunde umgewandelt";

export type AdminLead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  goal: string;
  source: string;
  status: AdminLeadStatus;
  createdAt: string;
};

export type AdminClient = {
  id: string;
  leadId: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  services: string[];
  monthlyBudget: number;
  status: "Aktiv" | "Onboarding" | "Pausiert";
  startDate: string;
};

export const adminLeads: AdminLead[] = [];

export const adminClients: AdminClient[] = [];

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value);
