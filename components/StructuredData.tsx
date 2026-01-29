export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Your Name Photography",
    "image": "https://yoursite.com/og-image.jpg",
    "@id": "https://yoursite.com",
    "url": "https://yoursite.com",
    "telephone": "+11234567890",
    "email": "your.email@example.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "Your Zip",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0.0, // TODO: Add actual coordinates
      "longitude": 0.0
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
      "https://instagram.com/yourhandle",
      "https://facebook.com/yourpage"
    ],
    "priceRange": "$$",
    "serviceType": [
      "Sports Photography",
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
