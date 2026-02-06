import Image from "next/image";
import Link from "next/link";

// Sample featured images - replace with actual portfolio images
const featuredImages = [
  {
    id: 1,
    src: "/images/featured-1.jpg",
    alt: "Featured photography work 1",
    category: "Corporate",
  },
  {
    id: 2,
    src: "/images/featured-2.jpg",
    alt: "Featured photography work 2",
    category: "Engagements",
  },
  {
    id: 3,
    src: "/images/featured-3.jpg",
    alt: "Featured photography work 3",
    category: "Personal",
  },
  {
    id: 4,
    src: "/images/featured-4.jpg",
    alt: "Featured photography work 4",
    category: "Corporate",
  },
  {
    id: 5,
    src: "/images/featured-5.jpg",
    alt: "Featured photography work 5",
    category: "Engagements",
  },
  {
    id: 6,
    src: "/images/featured-6.jpg",
    alt: "Featured photography work 6",
    category: "Personal",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A selection of my best shots showcasing the diversity and quality
            of my photography
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            View Full Portfolio
          </Link>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredImages.map((image) => (
            <Link
              key={image.id}
              href="/portfolio"
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
