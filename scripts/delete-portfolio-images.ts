import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

const srcsToDelete = [
  "/images/events-3.jpg",
  "/images/portrait-5.jpg",
  "/images/portrait-7.jpg",
  "/images/portrait-10.jpg",
  "/images/portrait-11.jpg",
];

async function run() {
  const { data, error } = await supabase
    .from("portfolio_images")
    .delete()
    .in("src", srcsToDelete)
    .select();

  if (error) {
    console.error("Delete error:", error.message);
    process.exit(1);
  }

  console.log(`Deleted ${data?.length ?? 0} rows:`);
  for (const row of data ?? []) console.log(`  - ${row.src}`);
}

run();
