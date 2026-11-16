import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "./server";

export async function requireAdminSupabase() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return {
      supabase: null,
      user: null,
      unauthorizedResponse: NextResponse.json(
        { error: "Unauthorized. Silakan login terlebih dahulu." },
        { status: 401 }
      ),
    };
  }

  return { supabase, user, unauthorizedResponse: null };
}
