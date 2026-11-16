import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { DEFAULT_SITE_DATA } from "./defaults";
import { getSupabaseConfig } from "./supabase/server";
import type { SiteData } from "./types";

/**
 * Fetch storefront data from Supabase using anonymous public read access
 * so `/` can be statically rendered / ISR-cached and revalidated on demand.
 */
export async function getSiteData(): Promise<SiteData> {
  const { url, anonKey } = getSupabaseConfig();
  if (!url || !anonKey) {
    return DEFAULT_SITE_DATA;
  }

  try {
    const supabase = createSupabaseClient(url, anonKey, {
      auth: { persistSession: false },
    });

    const [productsRes, brandsRes, settingsRes, areasRes, faqsRes] =
      await Promise.all([
        supabase
          .from("products")
          .select("*")
          .order("sort_order", { ascending: true }),
        supabase
          .from("brands")
          .select("*")
          .order("sort_order", { ascending: true }),
        supabase
          .from("site_settings")
          .select("*")
          .eq("id", "default")
          .maybeSingle(),
        supabase
          .from("coverage_areas")
          .select("*")
          .order("sort_order", { ascending: true }),
        supabase
          .from("faqs")
          .select("*")
          .order("sort_order", { ascending: true }),
      ]);

    return {
      products:
        productsRes.data && productsRes.data.length > 0
          ? productsRes.data
          : DEFAULT_SITE_DATA.products,
      brands:
        brandsRes.data && brandsRes.data.length > 0
          ? brandsRes.data
          : DEFAULT_SITE_DATA.brands,
      settings: settingsRes.data || DEFAULT_SITE_DATA.settings,
      coverageAreas:
        areasRes.data && areasRes.data.length > 0
          ? areasRes.data
          : DEFAULT_SITE_DATA.coverageAreas,
      faqs:
        faqsRes.data && faqsRes.data.length > 0
          ? faqsRes.data
          : DEFAULT_SITE_DATA.faqs,
    };
  } catch (err) {
    console.warn("[Data] Falling back to default site data:", err);
    return DEFAULT_SITE_DATA;
  }
}
