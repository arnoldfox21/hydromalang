import { redirect } from "next/navigation";
import AdminDashboard from "@/components/admin/AdminDashboard";
import { DEFAULT_SITE_DATA } from "@/lib/defaults";
import {
  createServerSupabaseClient,
  getAuthenticatedUser,
} from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await getAuthenticatedUser();
  if (!user) {
    redirect("/admin/login");
  }

  const supabase = await createServerSupabaseClient();
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
      supabase.from("faqs").select("*").order("sort_order", { ascending: true }),
    ]);

  const dbError =
    productsRes.error?.message ||
    brandsRes.error?.message ||
    settingsRes.error?.message ||
    null;

  const hasDbProducts = Boolean(productsRes.data && productsRes.data.length > 0);
  const hasDbBrands = Boolean(brandsRes.data && brandsRes.data.length > 0);

  return (
    <AdminDashboard
      userEmail={user.email || "Admin"}
      isSeeded={hasDbProducts && hasDbBrands}
      dbError={dbError}
      initialData={{
        products: hasDbProducts
          ? productsRes.data!
          : DEFAULT_SITE_DATA.products,
        brands: hasDbBrands ? brandsRes.data! : DEFAULT_SITE_DATA.brands,
        settings: settingsRes.data || DEFAULT_SITE_DATA.settings,
        coverageAreas:
          areasRes.data && areasRes.data.length > 0
            ? areasRes.data
            : DEFAULT_SITE_DATA.coverageAreas,
        faqs:
          faqsRes.data && faqsRes.data.length > 0
            ? faqsRes.data
            : DEFAULT_SITE_DATA.faqs,
      }}
    />
  );
}
