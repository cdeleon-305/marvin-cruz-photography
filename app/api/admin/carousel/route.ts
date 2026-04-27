import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { revalidatePath } from "next/cache";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabaseAdmin
    .from("carousel_images")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { src, alt } = body;

  if (!src || !alt) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { data: maxOrder } = await supabaseAdmin
    .from("carousel_images")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .single();

  const sort_order = (maxOrder?.sort_order ?? -1) + 1;

  const { data, error } = await supabaseAdmin
    .from("carousel_images")
    .insert({ src, alt, sort_order })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/");
  return NextResponse.json(data, { status: 201 });
}
