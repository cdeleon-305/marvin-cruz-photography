import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { isAdminAuthenticated } from "@/lib/admin-auth";

const portfolioImages = [
  { src: "/images/events-1.jpg", alt: "Corporate headshot", category: "events" },
  { src: "/images/events-2.jpg", alt: "Corporate headshot", category: "events" },
  { src: "/images/events-3.jpg", alt: "AutoNation DRV PNK x DCC 2025 at Hard Rock Stadium", category: "events" },
  { src: "/images/events-4.jpg", alt: "2025 Formula 1 Miami Grand Prix - AutoNation Sponsorship", category: "events" },
  { src: "/images/events-5.jpg", alt: "2025 Formula 1 Miami Grand Prix - AutoNation Sponsorship", category: "events" },
  { src: "/images/events-6.jpg", alt: "Alex's Place Toy Drive 2025 - DRV PNK", category: "events" },
  { src: "/images/events-7.jpg", alt: "Alex's Place Toy Drive 2025 - DRV PNK", category: "events" },
  { src: "/images/events-8.jpg", alt: "Corporate event photo", category: "events" },
  { src: "/images/events-9.jpg", alt: "Corporate event photo", category: "events" },
  { src: "/images/events-10.jpg", alt: "Corporate event photo", category: "events" },
  { src: "/images/events-11.jpg", alt: "Dolphins Cancer Challenge 2025 - AutoNation DRV PNK", category: "events" },
  { src: "/images/events-12.jpg", alt: "AutoNation DRV PNK x DCC 2025 at Hard Rock Stadium", category: "events" },
  { src: "/images/events-13.jpg", alt: "Corporate event photo", category: "events" },
  { src: "/images/wedding-1.jpg", alt: "Wedding photo", category: "weddings" },
  { src: "/images/wedding-2.jpg", alt: "Wedding and engagement photo", category: "weddings" },
  { src: "/images/wedding-3.jpg", alt: "Wedding and engagement photo", category: "weddings" },
  { src: "/images/wedding-4.jpg", alt: "Wedding and engagement photo", category: "weddings" },
  { src: "/images/wedding-5.jpg", alt: "Wedding and engagement photo", category: "weddings" },
  { src: "/images/portrait-1.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-2.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-3.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-4.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-5.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-6.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-7.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-8.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-9.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-10.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-11.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/portrait-12.jpg", alt: "Portrait photo", category: "portraits" },
  { src: "/images/sports-new-1.jpg", alt: "Orange Bowl Basketball Classic 2023", category: "sports" },
  { src: "/images/sports-new-2.jpg", alt: "Orange Bowl Basketball Classic 2023", category: "sports" },
  { src: "/images/sports-new-3.jpg", alt: "Basketball action shot", category: "sports" },
  { src: "/images/sports-new-4.jpg", alt: "Formula 1 race car", category: "sports" },
  { src: "/images/sports-new-5.jpg", alt: "Dolphins Cancer Challenge at Miami International Autodrome", category: "sports" },
  { src: "/images/sports-new-6.jpg", alt: "Fireworks at the National Championship at Hard Rock Stadium", category: "sports" },
  { src: "/images/sports-new-7.jpg", alt: "Fan at the National Championship 2026 at Hard Rock Stadium", category: "sports" },
  { src: "/images/sports-new-8.jpg", alt: "National Championship 2026 game action at Hard Rock Stadium", category: "sports" },
];

const carouselImages = [
  { src: "/images/carousel-2.jpg", alt: "Wedding and engagement photography" },
  { src: "/images/carousel-fireworks.jpg", alt: "Fireworks at the National Championship at Hard Rock Stadium" },
  { src: "/images/carousel-mcdaniel.jpg", alt: "Coach McDaniel at Hard Rock Stadium" },
  { src: "/images/carousel-fans.jpg", alt: "Formula 1 Miami Grand Prix" },
];

export async function POST() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Check if data already exists
  const { count } = await supabaseAdmin
    .from("portfolio_images")
    .select("*", { count: "exact", head: true });

  if (count && count > 0) {
    return NextResponse.json({ error: "Data already migrated", count }, { status: 409 });
  }

  const portfolioRows = portfolioImages.map((img, i) => ({
    src: img.src,
    alt: img.alt,
    category: img.category,
    sort_order: i,
  }));

  const { error: portfolioError } = await supabaseAdmin
    .from("portfolio_images")
    .insert(portfolioRows);

  if (portfolioError) {
    return NextResponse.json({ error: portfolioError.message }, { status: 500 });
  }

  const carouselRows = carouselImages.map((img, i) => ({
    src: img.src,
    alt: img.alt,
    sort_order: i,
  }));

  const { error: carouselError } = await supabaseAdmin
    .from("carousel_images")
    .insert(carouselRows);

  if (carouselError) {
    return NextResponse.json({ error: carouselError.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    portfolio: portfolioRows.length,
    carousel: carouselRows.length,
  });
}
