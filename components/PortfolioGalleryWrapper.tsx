import type { PortfolioImage } from "@/lib/types";
import PortfolioGallery from "./PortfolioGallery";

async function getPortfolioImages(): Promise<PortfolioImage[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return [];

  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(url, key);

  const { data } = await supabase
    .from("portfolio_images")
    .select("*")
    .order("sort_order", { ascending: true });

  return data ?? [];
}

export default async function PortfolioGalleryWrapper() {
  const images = await getPortfolioImages();

  return <PortfolioGallery images={images} />;
}
