import { del } from "@vercel/blob";

export function isVercelBlobUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  return url.includes(".public.blob.vercel-storage.com");
}

/**
 * Delete a Vercel Blob URL if it belongs to Vercel Blob storage.
 * Silently ignores non-blob URLs (e.g. local /images/products/...) and already-deleted blobs.
 */
export async function deleteBlobUrl(url: string | null | undefined): Promise<void> {
  if (!isVercelBlobUrl(url) || !process.env.BLOB_READ_WRITE_TOKEN) {
    return;
  }
  try {
    await del(url as string);
  } catch (err) {
    console.warn("[Blob] Failed to delete old blob:", url, err);
  }
}
