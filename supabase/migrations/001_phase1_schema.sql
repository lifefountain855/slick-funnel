create extension if not exists pgcrypto;

create type public.lead_status as enum ('New', 'Contacted', 'Meeting', 'Proposal', 'Won', 'Lost');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'client' check (role in ('admin', 'client')),
  created_at timestamptz not null default now()
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  website text,
  industry text,
  city text,
  preferred_contact_method text,
  source text not null,
  status public.lead_status not null default 'New',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.audit_reports (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  overall_score integer check (overall_score between 0 and 100),
  recommendation text,
  created_at timestamptz not null default now()
);

create table public.audit_items (
  id uuid primary key default gen_random_uuid(),
  audit_report_id uuid not null references public.audit_reports(id) on delete cascade,
  category text not null,
  score integer not null check (score between 0 and 100),
  notes text,
  sort_order integer not null default 0
);

create index leads_status_idx on public.leads(status);
create index leads_created_at_idx on public.leads(created_at desc);
create index audit_reports_lead_id_idx on public.audit_reports(lead_id);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger leads_set_updated_at
before update on public.leads
for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.leads enable row level security;
alter table public.audit_reports enable row level security;
alter table public.audit_items enable row level security;

create policy "Users can read their own profile"
on public.profiles for select to authenticated
using (id = (select auth.uid()));

create policy "Public can submit leads"
on public.leads for insert to anon, authenticated with check (true);

create policy "Admins can read leads"
on public.leads for select to authenticated
using (exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'admin'));

create policy "Admins can update leads"
on public.leads for update to authenticated
using (exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'admin'))
with check (exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'admin'));

create policy "Admins can read audit reports"
on public.audit_reports for select to authenticated
using (exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'admin'));

create policy "Public can create audit reports"
on public.audit_reports for insert to anon, authenticated with check (true);

create policy "Admins can read audit items"
on public.audit_items for select to authenticated
using (exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'admin'));

create policy "Public can create audit items"
on public.audit_items for insert to anon, authenticated with check (true);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', new.email));
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();
