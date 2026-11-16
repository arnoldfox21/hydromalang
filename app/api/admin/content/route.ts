import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { requireAdminSupabase } from "@/lib/supabase/admin-api";

export async function POST(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const body = await request.json();
  const id = body.id?.trim() || `${body.type}-${Date.now().toString(36)}`;

  if (body.type === "coverage") {
    const { data, error } = await supabase
      .from("coverage_areas")
      .insert({
        id,
        name: String(body.name || "").trim(),
        note: String(body.note || "").trim(),
        status: String(body.status || "Bisa via Shopee").trim(),
        is_primary: Boolean(body.is_primary),
        sub_areas: Array.isArray(body.sub_areas) ? body.sub_areas : [],
        estimate: String(body.estimate || "").trim(),
        badge: String(body.badge || "").trim(),
        sort_order: Number(body.sort_order) || 0,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    revalidatePath("/");
    return NextResponse.json({ item: data });
  }

  const { data, error } = await supabase
    .from("faqs")
    .insert({
      id,
      question: String(body.question || "").trim(),
      answer: String(body.answer || "").trim(),
      shopee_link: Boolean(body.shopee_link),
      sort_order: Number(body.sort_order) || 0,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  revalidatePath("/");
  return NextResponse.json({ item: data });
}

export async function PUT(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const body = await request.json();
  if (!body.id) {
    return NextResponse.json({ error: "ID wajib diisi." }, { status: 400 });
  }

  if (body.type === "coverage") {
    const { data, error } = await supabase
      .from("coverage_areas")
      .update({
        name: String(body.name || "").trim(),
        note: String(body.note || "").trim(),
        status: String(body.status || "Bisa via Shopee").trim(),
        is_primary: Boolean(body.is_primary),
        sub_areas: Array.isArray(body.sub_areas) ? body.sub_areas : [],
        estimate: String(body.estimate || "").trim(),
        badge: String(body.badge || "").trim(),
        sort_order: Number(body.sort_order) || 0,
      })
      .eq("id", body.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    revalidatePath("/");
    return NextResponse.json({ item: data });
  }

  const { data, error } = await supabase
    .from("faqs")
    .update({
      question: String(body.question || "").trim(),
      answer: String(body.answer || "").trim(),
      shopee_link: Boolean(body.shopee_link),
      sort_order: Number(body.sort_order) || 0,
    })
    .eq("id", body.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  revalidatePath("/");
  return NextResponse.json({ item: data });
}

export async function DELETE(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  if (!id || !type) {
    return NextResponse.json(
      { error: "ID dan type wajib diisi." },
      { status: 400 }
    );
  }

  const table = type === "coverage" ? "coverage_areas" : "faqs";
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  revalidatePath("/");
  return NextResponse.json({ ok: true });
}
