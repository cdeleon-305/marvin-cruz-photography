export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: "events" | "weddings" | "portraits" | "sports";
  sort_order: number;
  created_at: string;
}

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  sort_order: number;
  created_at: string;
}
