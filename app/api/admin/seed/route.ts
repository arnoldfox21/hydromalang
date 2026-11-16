import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { DEFAULT_SITE_DATA } from "@/lib/defaults";
import { requireAdminSupabase } from "@/lib/supabase/admin-api";

export async function POST() {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  try {
    const [p, b, s, c, f] = await Promise.all([
      supabase
        .from("products")
        .upsert(DEFAULT_SITE_DATA.products, { onConflict: "id" }),
      supabase
        .from("brands")
        .upsert(DEFAULT_SITE_DATA.brands, { onConflict: "id" }),
      supabase
        .from("site_settings")
        .upsert(DEFAULT_SITE_DATA.settings, { onConflict: "id" }),
      supabase
        .from("coverage_areas")
        .upsert(DEFAULT_SITE_DATA.coverageAreas, { onConflict: "id" }),
      supabase
        .from("faqs")
        .upsert(DEFAULT_SITE_DATA.faqs, { onConflict: "id" }),
    ]);

    const firstError = [p, b, s, c, f].find((r) => r.error)?.error;
    if (firstError) {
      return NextResponse.json({ error: firstError.message }, { status: 500 });
    }

    revalidatePath("/");
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Seed] Failed:", err);
    return NextResponse.json(
      { error: "Gagal melakukan seed data." },
      { status: 500 }
    );
  }
}
