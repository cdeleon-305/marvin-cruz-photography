import type { CarouselImage } from "@/lib/types";
import HeroCarousel from "./HeroCarousel";

async function getCarouselImages(): Promise<CarouselImage[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return [];

  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(url, key);

  const { data } = await supabase
    .from("carousel_images")
    .select("*")
    .order("sort_order", { ascending: true });

  return data ?? [];
}

export default async function HeroCarouselWrapper() {
  const images = await getCarouselImages();

  return <HeroCarousel images={images} />;
}
