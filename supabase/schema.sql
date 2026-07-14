-- =====================================================================
--  KLICKFUNDEN v2.0 CRM — Supabase schema (namespaced with crm_)
--  Coexists with the existing tables (leads, kunden, partners, ...).
--  Run this in the Supabase SQL Editor (Project → SQL → New query).
-- =====================================================================

-- ---------- enums ----------
do $$ begin
  create type crm_lead_status as enum ('new', 'contacted', 'won', 'lost');
exception when duplicate_object then null; end $$;

do $$ begin
  create type crm_deal_stage as enum ('lead', 'qualified', 'proposal', 'won', 'lost');
exception when duplicate_object then null; end $$;

do $$ begin
  create type crm_customer_status as enum ('active', 'paused', 'churned');
exception when duplicate_object then null; end $$;

do $$ begin
  create type crm_project_status as enum ('planning', 'active', 'review', 'done', 'paused');
exception when duplicate_object then null; end $$;

-- ---------- tables ----------
create table if not exists public.crm_leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text,
  phone       text,
  company     text,
  message     text,
  source      text not null default 'website',
  status      crm_lead_status not null default 'new',
  estimate    numeric,
  config      jsonb
);

create table if not exists public.crm_customers (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  company     text,
  email       text,
  phone       text,
  status      crm_customer_status not null default 'active',
  notes       text
);

create table if not exists public.crm_projects (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  customer_id   uuid references public.crm_customers(id) on delete cascade,
  title         text not null,
  package       text,
  status        crm_project_status not null default 'planning',
  monthly_value numeric,
  started_at    date
);

create table if not exists public.crm_deals (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  title         text not null,
  contact_name  text,
  contact_email text,
  value         numeric,
  stage         crm_deal_stage not null default 'lead',
  lead_id       uuid references public.crm_leads(id) on delete set null
);

create table if not exists public.crm_tasks (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  title        text not null,
  done         boolean not null default false,
  due_date     date,
  customer_id  uuid references public.crm_customers(id) on delete cascade,
  deal_id      uuid references public.crm_deals(id) on delete cascade,
  lead_id      uuid references public.crm_leads(id) on delete cascade
);

create table if not exists public.crm_notes (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  body         text not null,
  customer_id  uuid references public.crm_customers(id) on delete cascade,
  deal_id      uuid references public.crm_deals(id) on delete cascade,
  lead_id      uuid references public.crm_leads(id) on delete cascade
);

-- ---------- row level security ----------
alter table public.crm_leads     enable row level security;
alter table public.crm_customers enable row level security;
alter table public.crm_projects  enable row level security;
alter table public.crm_deals     enable row level security;
alter table public.crm_tasks     enable row level security;
alter table public.crm_notes     enable row level security;

-- Public website form may CREATE leads (insert only, no read).
drop policy if exists "public can insert crm leads" on public.crm_leads;
create policy "public can insert crm leads"
  on public.crm_leads for insert
  to anon
  with check (true);

-- Signed-in team members (admins) can do everything on every table.
do $$
declare t text;
begin
  foreach t in array array['crm_leads','crm_customers','crm_projects','crm_deals','crm_tasks','crm_notes'] loop
    execute format('drop policy if exists "auth full access" on public.%I;', t);
    execute format(
      'create policy "auth full access" on public.%I for all to authenticated using (true) with check (true);',
      t
    );
  end loop;
end $$;

-- ---------- helpful indexes ----------
create index if not exists crm_leads_status_idx  on public.crm_leads(status);
create index if not exists crm_leads_created_idx on public.crm_leads(created_at desc);
create index if not exists crm_deals_stage_idx    on public.crm_deals(stage);
create index if not exists crm_projects_cust_idx  on public.crm_projects(customer_id);
