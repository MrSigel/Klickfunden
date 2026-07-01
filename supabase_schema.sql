create extension if not exists pgcrypto;

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(), contact_name text not null, organization_name text not null,
  email text not null unique, password_hash text not null, website text, phone text, industry text not null,
  region text, partner_area text not null, status text not null default 'wartet_auf_pruefung', selected_package text not null,
  payment_status text not null default 'offen', permanent_payment_reference text unique, message text, no_competing_service_confirmed boolean not null default false,
  terms_accepted_at timestamptz not null, no_guarantee_confirmed_at timestamptz not null, admin_notes text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.partner_payments (
  id uuid primary key default gen_random_uuid(), partner_id uuid not null references public.partners(id) on delete cascade,
  package_name text not null, amount numeric, status text not null default 'offen', payment_reference text not null,
  paid_at timestamptz, period_start date, period_end date, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.partner_keyword_requests (
  id uuid primary key default gen_random_uuid(), partner_id uuid not null references public.partners(id) on delete cascade,
  topic text not null, industry text not null, target_group text, region text, website text, goal text not null,
  description text not null, status text not null default 'neu', admin_answer text, recommended_keywords text[],
  search_intent_notes text, optimization_notes text, answered_at timestamptz,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.partner_monthly_quotas (
  id uuid primary key default gen_random_uuid(), partner_id uuid not null references public.partners(id) on delete cascade,
  month_key text not null, package_name text not null, quota_total integer not null default 4,
  quota_used integer not null default 0, quota_remaining integer not null default 4, reset_at timestamptz,
  payment_required boolean not null default true, is_active boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(partner_id, month_key)
);
create table if not exists public.partner_admin_notes (
  id uuid primary key default gen_random_uuid(), partner_id uuid not null references public.partners(id) on delete cascade,
  note text not null, created_at timestamptz not null default now()
);
alter table public.partners enable row level security;
alter table public.partner_payments enable row level security;
alter table public.partner_keyword_requests enable row level security;
alter table public.partner_monthly_quotas enable row level security;
alter table public.partner_admin_notes enable row level security;
revoke all on public.partners, public.partner_payments, public.partner_keyword_requests, public.partner_monthly_quotas, public.partner_admin_notes from anon, authenticated;
create index if not exists partners_status_idx on public.partners(status);
create index if not exists partner_requests_partner_created_idx on public.partner_keyword_requests(partner_id, created_at desc);
create index if not exists partner_payments_partner_created_idx on public.partner_payments(partner_id, created_at desc);

create or replace function public.create_partner_keyword_request(
  p_partner_id uuid, p_topic text, p_industry text, p_target_group text, p_region text, p_website text, p_goal text, p_description text, p_month_key text
) returns uuid language plpgsql security definer set search_path = public as $$
declare q public.partner_monthly_quotas; new_id uuid;
begin
  select * into q from public.partner_monthly_quotas where partner_id=p_partner_id and month_key=p_month_key for update;
  if q.id is null or not q.is_active or q.quota_remaining <= 0 then raise exception 'quota_unavailable'; end if;
  insert into public.partner_keyword_requests(partner_id,topic,industry,target_group,region,website,goal,description)
  values(p_partner_id,p_topic,p_industry,nullif(p_target_group,''),nullif(p_region,''),nullif(p_website,''),p_goal,p_description) returning id into new_id;
  update public.partner_monthly_quotas set quota_used=quota_used+1, quota_remaining=quota_remaining-1, updated_at=now() where id=q.id;
  return new_id;
end; $$;
revoke all on function public.create_partner_keyword_request(uuid,text,text,text,text,text,text,text,text) from public, anon, authenticated;
grant execute on function public.create_partner_keyword_request(uuid,text,text,text,text,text,text,text,text) to service_role;

-- Interne Klickfunden-Admin-Daten. Zugriff erfolgt ausschließlich serverseitig
-- über den Service Role Key; anon/authenticated erhalten keine Policies.
create table if not exists public.admin_inquiries (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), name text not null, company text, email text not null, phone text, website text, service text, message text, source text, status text not null default 'Neu', notes text);
create table if not exists public.admin_leads (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), company text not null, website text, email text, phone text, industry text, location text, service_potential text, source text, status text not null default 'Offen', notes text, last_contact date);
create table if not exists public.admin_audits (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), company text not null, website text not null, industry text, seo_score numeric, geo_score numeric, aeo_score numeric, local_seo_score numeric, conversion_score numeric, google_ads_potential text, meta_ads_potential text, youtube_ads_potential text, technical_notes text, recommended_actions text, status text not null default 'Offen');
create table if not exists public.admin_keywords (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), keyword text not null, search_intent text, category text, priority text, service text, industry text, notes text, status text not null default 'Idee');
create table if not exists public.admin_ads_campaigns (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), company text not null, website text, channel text, campaign_name text not null, goal text, planned_budget numeric, target_group text, keywords text, negative_keywords text, ad_copy text, creative_notes text, status text not null default 'Entwurf', start_date date, end_date date);
create table if not exists public.admin_reports (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), company text not null, website text, period text, report_type text, summary text, actions text, results text, next_steps text, status text not null default 'Entwurf');
create table if not exists public.admin_tasks (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), title text not null, description text, area text, priority text, status text not null default 'Offen', due_date date, related_contact text);
create table if not exists public.admin_content_plans (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), page_title text not null, target_keyword text, search_intent text, aeo_questions text, geo_entity_notes text, internal_links text, status text not null default 'Idee', notes text);
create table if not exists public.admin_settings (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(), company_name text not null, website text, contact_email text, default_cta text, default_sender_name text, default_notes text);

alter table public.admin_inquiries enable row level security;
alter table public.admin_leads enable row level security;
alter table public.admin_audits enable row level security;
alter table public.admin_keywords enable row level security;
alter table public.admin_ads_campaigns enable row level security;
alter table public.admin_reports enable row level security;
alter table public.admin_tasks enable row level security;
alter table public.admin_content_plans enable row level security;
alter table public.admin_settings enable row level security;

revoke all on public.admin_inquiries, public.admin_leads, public.admin_audits, public.admin_keywords, public.admin_ads_campaigns, public.admin_reports, public.admin_tasks, public.admin_content_plans, public.admin_settings from anon, authenticated;

create index if not exists admin_inquiries_status_idx on public.admin_inquiries(status);
create index if not exists admin_inquiries_created_at_idx on public.admin_inquiries(created_at desc);
create index if not exists admin_leads_status_idx on public.admin_leads(status);
create index if not exists admin_audits_status_idx on public.admin_audits(status);
create index if not exists admin_tasks_status_due_date_idx on public.admin_tasks(status, due_date);
create index if not exists admin_reports_status_idx on public.admin_reports(status);

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$
declare table_name text;
begin
  foreach table_name in array array['admin_inquiries','admin_leads','admin_audits','admin_keywords','admin_ads_campaigns','admin_reports','admin_tasks','admin_content_plans','admin_settings','partners','partner_payments','partner_keyword_requests','partner_monthly_quotas'] loop
    execute format('drop trigger if exists set_updated_at on public.%I', table_name);
    execute format('create trigger set_updated_at before update on public.%I for each row execute function public.set_updated_at()', table_name);
  end loop;
end;
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select
    coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false)
    or coalesce((auth.jwt() -> 'user_metadata' ->> 'role') = 'admin', false);
$$;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  telefon text not null,
  website text not null,
  form_data jsonb not null default '{}'::jsonb,
  status text not null default 'Neu',
  constraint leads_email_valid check (position('@' in email) > 1),
  constraint leads_status_valid check (status in ('Neu', 'Qualifiziert', 'In Kunde umgewandelt', 'Archiviert'))
);

create table if not exists public.kunden (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  lead_id uuid references public.leads(id) on delete set null,
  company_name text not null,
  contact_person text not null,
  email text not null,
  telefon text not null,
  website text not null,
  constraint kunden_email_valid check (position('@' in email) > 1)
);

create table if not exists public.referenzen (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  result text not null,
  url text not null,
  image_url text
);

alter table public.referenzen
  add column if not exists image_url text;

alter table public.leads enable row level security;
alter table public.kunden enable row level security;
alter table public.referenzen enable row level security;

drop policy if exists "leads_public_insert" on public.leads;

drop policy if exists "leads_admin_select" on public.leads;
create policy "leads_admin_select"
on public.leads
for select
to authenticated
using (public.is_admin());

drop policy if exists "leads_admin_update" on public.leads;
create policy "leads_admin_update"
on public.leads
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "leads_admin_delete" on public.leads;
create policy "leads_admin_delete"
on public.leads
for delete
to authenticated
using (public.is_admin());

drop policy if exists "kunden_admin_select" on public.kunden;
create policy "kunden_admin_select"
on public.kunden
for select
to authenticated
using (public.is_admin());

drop policy if exists "kunden_admin_insert" on public.kunden;
create policy "kunden_admin_insert"
on public.kunden
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "kunden_admin_update" on public.kunden;
create policy "kunden_admin_update"
on public.kunden
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "kunden_admin_delete" on public.kunden;
create policy "kunden_admin_delete"
on public.kunden
for delete
to authenticated
using (public.is_admin());

drop policy if exists "referenzen_public_select" on public.referenzen;
create policy "referenzen_public_select"
on public.referenzen
for select
to anon, authenticated
using (true);

drop policy if exists "referenzen_admin_insert" on public.referenzen;
create policy "referenzen_admin_insert"
on public.referenzen
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "referenzen_admin_update" on public.referenzen;
create policy "referenzen_admin_update"
on public.referenzen
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "referenzen_admin_delete" on public.referenzen;
create policy "referenzen_admin_delete"
on public.referenzen
for delete
to authenticated
using (public.is_admin());

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values
  (
    'public-assets',
    'public-assets',
    true,
    5242880,
    array['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[]
  ),
  (
    'private-documents',
    'private-documents',
    false,
    10485760,
    array['application/pdf', 'image/jpeg', 'image/png', 'image/webp']::text[]
  )
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "public_assets_public_read" on storage.objects;
create policy "public_assets_public_read"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'public-assets');

drop policy if exists "public_assets_admin_insert" on storage.objects;
create policy "public_assets_admin_insert"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'public-assets' and public.is_admin());

drop policy if exists "public_assets_admin_update" on storage.objects;
create policy "public_assets_admin_update"
on storage.objects
for update
to authenticated
using (bucket_id = 'public-assets' and public.is_admin())
with check (bucket_id = 'public-assets' and public.is_admin());

drop policy if exists "public_assets_admin_delete" on storage.objects;
create policy "public_assets_admin_delete"
on storage.objects
for delete
to authenticated
using (bucket_id = 'public-assets' and public.is_admin());

drop policy if exists "private_documents_admin_all" on storage.objects;
create policy "private_documents_admin_all"
on storage.objects
for all
to authenticated
using (bucket_id = 'private-documents' and public.is_admin())
with check (bucket_id = 'private-documents' and public.is_admin());
