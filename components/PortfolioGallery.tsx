"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// Sample portfolio data - replace with actual images
const portfolioImages = [
  { id: 1, src: "/images/sports-1.jpg", alt: "Sports photo 1", category: "sports" },
  { id: 2, src: "/images/sports-2.jpg", alt: "Sports photo 2", category: "sports" },
  { id: 3, src: "/images/sports-3.jpg", alt: "Sports photo 3", category: "sports" },
  { id: 4, src: "/images/sports-4.jpg", alt: "Sports photo 4", category: "sports" },
  { id: 5, src: "/images/engagement-1.jpg", alt: "Engagement photo 1", category: "engagements" },
  { id: 6, src: "/images/engagement-2.jpg", alt: "Engagement photo 2", category: "engagements" },
  { id: 7, src: "/images/engagement-3.jpg", alt: "Engagement photo 3", category: "engagements" },
  { id: 8, src: "/images/engagement-4.jpg", alt: "Engagement photo 4", category: "engagements" },
  { id: 9, src: "/images/personal-1.jpg", alt: "Personal photo 1", category: "personal" },
  { id: 10, src: "/images/personal-2.jpg", alt: "Personal photo 2", category: "personal" },
  { id: 11, src: "/images/personal-3.jpg", alt: "Personal photo 3", category: "personal" },
  { id: 12, src: "/images/personal-4.jpg", alt: "Personal photo 4", category: "personal" },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "sports", label: "Sports" },
  { id: "engagements", label: "Engagements" },
  { id: "personal", label: "Personal" },
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
                    ? "bg-gray-900 text-white"
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
