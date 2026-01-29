import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <HeroCarousel />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-balance">
          Capturing Life's
          <br />
          Most Beautiful Moments
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Professional photography services specializing in sports events,
          engagements, and personal shoots
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/portfolio"
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
