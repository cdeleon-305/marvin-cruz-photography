import Image from "next/image";
import Link from "next/link";
import { FiTrendingUp, FiHeart, FiUser } from "react-icons/fi";

const services = [
  {
    title: "Corporate Events",
    description: "Professional corporate event coverage capturing the energy, emotion, and key moments of your events.",
    icon: FiTrendingUp,
    image: "/images/events-3.jpg",
    href: "/portfolio?category=events",
  },
  {
    title: "Weddings & Engagements",
    description: "Romantic and authentic moments celebrating your love story. Beautiful imagery perfect for your most memorable occasions.",
    icon: FiHeart,
    image: "/images/wedding-1.jpg",
    href: "/portfolio?category=weddings",
  },
  {
    title: "Portrait Photography",
    description: "Professional portraits, family photos, and lifestyle sessions. Capture your personality and create lasting memories.",
    icon: FiUser,
    image: "/images/portrait-4.jpg",
    href: "/portfolio?category=portraits",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What I Specialize In
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From corporate events to intimate personal moments, I bring
            passion and expertise to every shoot
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <service.icon className="w-6 h-6 text-gray-900" />
                  <h3 className="font-display text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-gray-900 font-medium group-hover:translate-x-2 transition-transform">
                  View Gallery
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
