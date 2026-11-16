import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { requireAdminSupabase } from "@/lib/supabase/admin-api";

export async function POST(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const body = await request.json();
  const id =
    body.id?.trim() ||
    (body.name || "brand")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const { data, error } = await supabase
    .from("brands")
    .insert({
      id,
      name: String(body.name || "").trim(),
      status: String(body.status || "Segera Hadir").trim(),
      available: Boolean(body.available),
      description: String(body.description || "").trim(),
      sort_order: Number(body.sort_order) || 0,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  revalidatePath("/");
  return NextResponse.json({ brand: data });
}

export async function PUT(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const body = await request.json();
  if (!body.id) {
    return NextResponse.json({ error: "ID merek wajib diisi." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("brands")
    .update({
      name: String(body.name || "").trim(),
      status: String(body.status || "Segera Hadir").trim(),
      available: Boolean(body.available),
      description: String(body.description || "").trim(),
      sort_order: Number(body.sort_order) || 0,
    })
    .eq("id", body.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  revalidatePath("/");
  return NextResponse.json({ brand: data });
}

export async function DELETE(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID merek wajib diisi." }, { status: 400 });
  }

  const { error } = await supabase.from("brands").delete().eq("id", id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  revalidatePath("/");
  return NextResponse.json({ ok: true });
}
