"use client";
import React from "react";
import Head from "next/head";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CQD Cleaning Services",
    image: "https://www.cqdcleaningservices.com/images/blue-logo.svg",
    "@id": "https://www.cqdcleaningservices.com/#business",
    url: "https://www.cqdcleaningservices.com/",
    telephone: "+44 1494 911001",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Aston Court, Kingsmead Business Park",
      addressLocality: "High Wycombe",
      addressRegion: "Buckinghamshire",
      postalCode: "HP11 1LA",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.611258,
      longitude: -0.704654,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "££",
    sameAs: [
      "https://www.facebook.com/CQDCleaningServices",
      "https://www.linkedin.com/company/cqdcleaningservices",
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </Head>
  );
}
