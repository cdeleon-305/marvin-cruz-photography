export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Marvin Cruz Photography",
    "image": "https://marvin-cruz-photography.vercel.app/og-image.jpg",
    "@id": "https://marvin-cruz-photography.vercel.app",
    "url": "https://marvin-cruz-photography.vercel.app",
    "telephone": "+13054847595",
    "email": "marvindcruzjr@gmail.com",
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
