"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// Sample portfolio data - replace with actual images
const portfolioImages = [
  { id: 1, src: "/images/events-1.jpg", alt: "Corporate headshot", category: "events" },
  { id: 2, src: "/images/events-2.jpg", alt: "Corporate headshot", category: "events" },
  { id: 3, src: "/images/events-3.jpg", alt: "AutoNation DRV PNK x DCC 2025 at Hard Rock Stadium", category: "events" },
  { id: 4, src: "/images/events-4.jpg", alt: "2025 Formula 1 Miami Grand Prix - AutoNation Sponsorship", category: "events" },
  { id: 5, src: "/images/events-5.jpg", alt: "2025 Formula 1 Miami Grand Prix - AutoNation Sponsorship", category: "events" },
  { id: 6, src: "/images/events-6.jpg", alt: "Alex's Place Toy Drive 2025 - DRV PNK", category: "events" },
  { id: 7, src: "/images/events-7.jpg", alt: "Alex's Place Toy Drive 2025 - DRV PNK", category: "events" },
  { id: 8, src: "/images/events-8.jpg", alt: "Corporate event photo", category: "events" },
  { id: 9, src: "/images/events-9.jpg", alt: "Corporate event photo", category: "events" },
  { id: 10, src: "/images/events-10.jpg", alt: "Corporate event photo", category: "events" },
  { id: 11, src: "/images/events-11.jpg", alt: "Dolphins Cancer Challenge 2025 - AutoNation DRV PNK", category: "events" },
  { id: 12, src: "/images/events-12.jpg", alt: "AutoNation DRV PNK x DCC 2025 at Hard Rock Stadium", category: "events" },
  { id: 13, src: "/images/events-13.jpg", alt: "Corporate event photo", category: "events" },
  { id: 14, src: "/images/wedding-1.jpg", alt: "Wedding photo", category: "weddings" },
  { id: 15, src: "/images/wedding-2.jpg", alt: "Wedding and engagement photo", category: "weddings" },
  { id: 16, src: "/images/wedding-3.jpg", alt: "Wedding and engagement photo", category: "weddings" },
  { id: 17, src: "/images/wedding-4.jpg", alt: "Wedding and engagement photo", category: "weddings" },
  { id: 18, src: "/images/wedding-5.jpg", alt: "Wedding and engagement photo", category: "weddings" },
  { id: 19, src: "/images/portrait-1.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 20, src: "/images/portrait-2.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 21, src: "/images/portrait-3.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 22, src: "/images/portrait-4.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 23, src: "/images/portrait-5.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 24, src: "/images/portrait-6.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 25, src: "/images/portrait-7.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 26, src: "/images/portrait-8.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 27, src: "/images/portrait-9.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 28, src: "/images/portrait-10.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 29, src: "/images/portrait-11.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 30, src: "/images/portrait-12.jpg", alt: "Portrait photo", category: "portraits" },
  { id: 31, src: "/images/sports-new-1.jpg", alt: "Orange Bowl Basketball Classic 2023", category: "sports" },
  { id: 32, src: "/images/sports-new-2.jpg", alt: "Orange Bowl Basketball Classic 2023", category: "sports" },
  { id: 33, src: "/images/sports-new-3.jpg", alt: "Basketball action shot", category: "sports" },
  { id: 34, src: "/images/sports-new-4.jpg", alt: "Formula 1 race car", category: "sports" },
  { id: 35, src: "/images/sports-new-5.jpg", alt: "Dolphins Cancer Challenge at Miami International Autodrome", category: "sports" },
  { id: 36, src: "/images/sports-new-6.jpg", alt: "Fireworks at the National Championship at Hard Rock Stadium", category: "sports" },
  { id: 37, src: "/images/sports-new-7.jpg", alt: "Fan at the National Championship 2026 at Hard Rock Stadium", category: "sports" },
  { id: 38, src: "/images/sports-new-8.jpg", alt: "National Championship 2026 game action at Hard Rock Stadium", category: "sports" },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "events", label: "Corporate Events" },
  { id: "weddings", label: "Weddings & Engagements" },
  { id: "portraits", label: "Portraits" },
  { id: "sports", label: "Sports" },
];

export default function PortfolioGallery() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") {
      return portfolioImages;
    }
    return portfolioImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const currentImageIndex = lightboxImage
    ? filteredImages.findIndex((img) => img.id === lightboxImage)
    : -1;

  const nextImage = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setLightboxImage(filteredImages[currentImageIndex + 1].id);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setLightboxImage(filteredImages[currentImageIndex - 1].id);
    }
  };

  return (
    <>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-brand text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                onClick={() => openLightbox(image.id)}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Previous Button */}
          {currentImageIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={95}
            />
          </div>

          {/* Next Button */}
          {currentImageIndex < filteredImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors"
              aria-label="Next image"
            >
              ›
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}
