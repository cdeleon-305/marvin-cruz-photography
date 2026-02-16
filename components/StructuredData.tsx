export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Marvin Cruz Photography",
    "image": "https://marvin-cruz-photography.vercel.app/og-image.jpg",
    "@id": "https://marvin-cruz-photography.vercel.app",
    "url": "https://marvin-cruz-photography.vercel.app",
    "email": "marvindcruzjr@gmail.com",
    "description": "Professional photographer in South Florida specializing in corporate events, weddings, engagements, and portraits. Serving Miami, Fort Lauderdale, and Palm Beach.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.7617,
      "longitude": -80.1918
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Miami",
        "sameAs": "https://en.wikipedia.org/wiki/Miami"
      },
      {
        "@type": "City",
        "name": "Fort Lauderdale",
        "sameAs": "https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida"
      },
      {
        "@type": "City",
        "name": "West Palm Beach",
        "sameAs": "https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida"
      },
      {
        "@type": "State",
        "name": "South Florida"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://instagram.com/marvincruzphotography"
    ],
    "priceRange": "$$",
    "serviceType": [
      "Corporate Event Photography",
      "Wedding Photography",
      "Engagement Photography",
      "Portrait Photography",
      "Event Photography"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
