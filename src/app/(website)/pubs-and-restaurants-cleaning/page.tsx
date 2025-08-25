import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoPubsAndRestaurantsCleaning from "@/components/WwoPubsAndRestaurantsCleaning";
import React from "react";

export const metadata = {
  title: "Expert Pubs and Restaurants Cleaning Services by CQD Professionals",
  description:
    "CQD offers specialized cleaning solutions for pubs and restaurants, using eco-friendly products and thorough techniques to ensure a hygienic, welcoming, and safe environment for your customers and staff.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        // title="Professional Pubs and Restaurants Cleaning"
        title="Meet CQD The Best Pubs & Restaurants Cleaning Service Provider Across UK"
        description="Maintain a clean, safe, and inviting atmosphere with our expert cleaning services tailored specifically for pubs and restaurants."
        backgroundImage="/services/pubsCleaning2.jpg"
        imageAlt="Pubs and Restaurants Cleaning Services"
      />

      <WwoPubsAndRestaurantsCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
