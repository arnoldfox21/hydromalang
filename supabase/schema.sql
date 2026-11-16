-- Hydro Malang Admin & Storefront Schema
-- Run this in Supabase SQL Editor or via Postgres connection

create table if not exists public.products (
  id text primary key,
  name text not null,
  brand text not null default 'Cleo',
  price integer not null default 0,
  unit text not null default '/ galon',
  badge text not null default '',
  description text not null default '',
  image text not null default '/images/products/cleo-galon-19L.png',
  popular boolean not null default false,
  in_stock boolean not null default true,
  features text[] not null default '{}',
  wa_text text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.brands (
  id text primary key,
  name text not null,
  status text not null default 'Segera Hadir',
  available boolean not null default false,
  description text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id text primary key default 'default',
  wa_number text not null default '62895702831600',
  shopee_url text not null default 'https://shopee.co.id/hydromalang',
  free_shipping_area text not null default 'Perumahan Graha Merjosari Asri',
  delivery_estimate text not null default '10 - 20 Menit',
  operational_hours text not null default 'Setiap Hari: 07.00 - 21.00 WIB',
  promo_badge text not null default 'Air Mineral Populer Resmi • Gratis Ongkir Graha Merjosari Asri',
  updated_at timestamptz not null default now()
);

create table if not exists public.coverage_areas (
  id text primary key,
  name text not null,
  note text not null default '',
  status text not null default 'Bisa via Shopee',
  is_primary boolean not null default false,
  sub_areas text[] not null default '{}',
  estimate text not null default '',
  badge text not null default '',
  sort_order integer not null default 0
);

create table if not exists public.faqs (
  id text primary key,
  question text not null,
  answer text not null,
  shopee_link boolean not null default false,
  sort_order integer not null default 0
);

-- Enable Row Level Security
alter table public.products enable row level security;
alter table public.brands enable row level security;
alter table public.site_settings enable row level security;
alter table public.coverage_areas enable row level security;
alter table public.faqs enable row level security;

-- Public read policies
do $$ begin
  if not exists (select 1 from pg_policies where tablename = 'products' and policyname = 'Public read products') then
    create policy "Public read products" on public.products for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'brands' and policyname = 'Public read brands') then
    create policy "Public read brands" on public.brands for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'site_settings' and policyname = 'Public read site_settings') then
    create policy "Public read site_settings" on public.site_settings for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'coverage_areas' and policyname = 'Public read coverage_areas') then
    create policy "Public read coverage_areas" on public.coverage_areas for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'faqs' and policyname = 'Public read faqs') then
    create policy "Public read faqs" on public.faqs for select using (true);
  end if;
end $$;

-- Authenticated admin write policies
do $$ begin
  if not exists (select 1 from pg_policies where tablename = 'products' and policyname = 'Auth manage products') then
    create policy "Auth manage products" on public.products for all to authenticated using (true) with check (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'brands' and policyname = 'Auth manage brands') then
    create policy "Auth manage brands" on public.brands for all to authenticated using (true) with check (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'site_settings' and policyname = 'Auth manage site_settings') then
    create policy "Auth manage site_settings" on public.site_settings for all to authenticated using (true) with check (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'coverage_areas' and policyname = 'Auth manage coverage_areas') then
    create policy "Auth manage coverage_areas" on public.coverage_areas for all to authenticated using (true) with check (true);
  end if;
  if not exists (select 1 from pg_policies where tablename = 'faqs' and policyname = 'Auth manage faqs') then
    create policy "Auth manage faqs" on public.faqs for all to authenticated using (true) with check (true);
  end if;
end $$;
