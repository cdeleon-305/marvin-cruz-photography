import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Headshot */}
          <div className="relative aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/headshot.jpg"
              alt="Marvin Cruz - Professional Photographer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-brand mb-6"></div>
            </div>

            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                {/* Your story here - replace this placeholder text */}
                I'm Marvin Cruz, a Miami-based professional photographer with a passion
                for capturing life's most meaningful moments. With years of experience
                in sports, corporate events, weddings, and portrait photography, I bring
                creativity, technical expertise, and an eye for detail to every shoot.
              </p>

              <p>
                My approach is simple: tell your story authentically. Whether it's the
                intensity of a sporting event, the emotion of a wedding day, the
                professionalism of a corporate function, or the personality in a portrait,
                I'm dedicated to creating images that resonate.
              </p>

              <p>
                Based in Miami and serving South Florida, I'm here to help you preserve
                your most important memories with stunning, timeless photography.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark transition-colors"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
