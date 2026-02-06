import type { Metadata } from "next";
import { Suspense } from "react";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse my photography portfolio featuring corporate events, engagement shoots, and personal photography sessions.",
};

function PortfolioLoading() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-32 h-10 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="pt-20">
      <div className="bg-brand text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my work across different photography styles and categories
          </p>
        </div>
      </div>
      <Suspense fallback={<PortfolioLoading />}>
        <PortfolioGallery />
      </Suspense>
    </div>
  );
}
