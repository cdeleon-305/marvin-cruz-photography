import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Ready to Capture Your Moments?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's create stunning photographs that you'll treasure forever.
          Book your session today and let's bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
          <a
            href="tel:+13054847595"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Call Now: (305) 484-7595
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Typically responds within 24 hours
        </p>
      </div>
    </section>
  );
}
