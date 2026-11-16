import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { deleteBlobUrl } from "@/lib/blob";
import { requireAdminSupabase } from "@/lib/supabase/admin-api";

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(request: Request) {
  const { unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse) return unauthorizedResponse;

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "File gambar tidak ditemukan." },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Format file harus JPG, PNG, WebP, GIF, atau SVG." },
        { status: 400 }
      );
    }

    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json(
        { error: "Ukuran gambar maksimal 5 MB." },
        { status: 400 }
      );
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const blob = await put(`products/${safeName}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("[Upload] Error uploading to Vercel Blob:", err);
    return NextResponse.json(
      { error: "Gagal mengunggah gambar ke Vercel Blob." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const { unauthorizedResponse } = await requireAdminSupabase();
  if (unauthorizedResponse) return unauthorizedResponse;

  try {
    const { url } = await request.json();
    await deleteBlobUrl(url);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Gagal menghapus blob." }, { status: 400 });
  }
}
