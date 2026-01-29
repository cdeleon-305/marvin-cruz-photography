import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse my photography portfolio featuring sports events, engagement shoots, and personal photography sessions.",
};

export default function Portfolio() {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my work across different photography styles and categories
          </p>
        </div>
      </div>
      <PortfolioGallery />
    </div>
  );
}
