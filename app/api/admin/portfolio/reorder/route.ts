import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { revalidatePath } from "next/cache";

export async function PUT(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { items } = body as { items: { id: string; sort_order: number }[] };

  if (!items || !Array.isArray(items)) {
    return NextResponse.json({ error: "Invalid items" }, { status: 400 });
  }

  const updates = items.map(({ id, sort_order }) =>
    supabaseAdmin
      .from("portfolio_images")
      .update({ sort_order })
      .eq("id", id)
  );

  const results = await Promise.all(updates);
  const failed = results.find((r) => r.error);

  if (failed?.error) {
    return NextResponse.json({ error: failed.error.message }, { status: 500 });
  }

  revalidatePath("/portfolio");
  return NextResponse.json({ success: true });
}
