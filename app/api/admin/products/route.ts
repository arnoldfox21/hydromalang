import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { deleteBlobUrl } from "@/lib/blob";
import { requireAdminSupabase } from "@/lib/supabase/admin-api";

async function cleanupBlobIfUnused(
  supabase: NonNullable<Awaited<ReturnType<typeof requireAdminSupabase>>["supabase"]>,
  oldImageUrl: string | null | undefined,
  excludeProductId?: string
) {
  if (!oldImageUrl) return;
  let query = supabase
    .from("products")
    .select("id", { count: "exact", head: true })
    .eq("image", oldImageUrl);
  if (excludeProductId) {
    query = query.neq("id", excludeProductId);
  }
  const { count } = await query;
  if (!count || count === 0) {
    await deleteBlobUrl(oldImageUrl);
  }
}

export async function GET() {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ products: data || [] });
}

export async function POST(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const body = await request.json();
  const id =
    body.id?.trim() ||
    `${(body.name || "produk")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}-${Date.now().toString(36)}`;

  const payload = {
    id,
    name: String(body.name || "").trim(),
    brand: String(body.brand || "Cleo").trim(),
    price: Number(body.price) || 0,
    unit: String(body.unit || "/ galon").trim(),
    badge: String(body.badge || "").trim(),
    description: String(body.description || "").trim(),
    image: String(body.image || "/images/products/cleo-galon-19L.png").trim(),
    popular: Boolean(body.popular),
    in_stock: body.in_stock !== false,
    features: Array.isArray(body.features) ? body.features : [],
    wa_text: String(body.wa_text || "").trim(),
    sort_order: Number(body.sort_order) || 0,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("products")
    .insert(payload)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/");
  return NextResponse.json({ product: data });
}

export async function PUT(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const body = await request.json();
  if (!body.id) {
    return NextResponse.json({ error: "ID produk wajib diisi." }, { status: 400 });
  }

  const { data: existing } = await supabase
    .from("products")
    .select("image")
    .eq("id", body.id)
    .maybeSingle();

  const newImage = String(
    body.image || "/images/products/cleo-galon-19L.png"
  ).trim();

  const payload = {
    name: String(body.name || "").trim(),
    brand: String(body.brand || "Cleo").trim(),
    price: Number(body.price) || 0,
    unit: String(body.unit || "/ galon").trim(),
    badge: String(body.badge || "").trim(),
    description: String(body.description || "").trim(),
    image: newImage,
    popular: Boolean(body.popular),
    in_stock: body.in_stock !== false,
    features: Array.isArray(body.features) ? body.features : [],
    wa_text: String(body.wa_text || "").trim(),
    sort_order: Number(body.sort_order) || 0,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("products")
    .update(payload)
    .eq("id", body.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Delete old Vercel Blob image if replaced and unused by any other product
  if (existing?.image && existing.image !== newImage) {
    await cleanupBlobIfUnused(supabase, existing.image, body.id);
  }

  revalidatePath("/");
  return NextResponse.json({ product: data });
}

export async function DELETE(request: Request) {
  const { supabase, unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse || !supabase) return unauthorizedResponse!;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID produk wajib diisi." }, { status: 400 });
  }

  const { data: existing } = await supabase
    .from("products")
    .select("image")
    .eq("id", id)
    .maybeSingle();

  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (existing?.image) {
    await cleanupBlobIfUnused(supabase, existing.image, id);
  }

  revalidatePath("/");
  return NextResponse.json({ ok: true });
}
