import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

for (const line of readFileSync(".env.local", "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)="?(.*?)"?$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function run() {
  const { data, error } = await supabase
    .from("portfolio_images")
    .select("id, src, category, sort_order")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  console.log(`Total: ${data?.length}`);
  for (const r of data ?? []) console.log(`  [${r.sort_order}] ${r.category} ${r.src}`);
}

run();
