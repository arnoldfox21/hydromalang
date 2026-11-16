import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { requireAdminSupabase } from "@/lib/supabase/admin-api";

export async function PUT(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const body = await request.json();
  const payload = {
    id: "default",
    wa_number: String(body.wa_number || "62895702831600").trim(),
    shopee_url: String(body.shopee_url || "https://shopee.co.id/hydromalang").trim(),
    free_shipping_area: String(body.free_shipping_area || "").trim(),
    delivery_estimate: String(body.delivery_estimate || "").trim(),
    operational_hours: String(body.operational_hours || "").trim(),
    promo_badge: String(body.promo_badge || "").trim(),
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("site_settings")
    .upsert(payload, { onConflict: "id" })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/");
  return NextResponse.json({ settings: data });
}
