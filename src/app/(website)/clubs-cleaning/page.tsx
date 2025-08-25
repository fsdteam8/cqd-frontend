import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoClubsCleaning from "@/components/WwoClubCleaning";
import React from "react";

export const metadata = {
  title: "Clubs Cleaning Services | Nightclub & Lounge Cleaning Experts",
  description:
    " Ensure a clean, safe, and inviting atmosphere with our professional clubs cleaning services. We specialize in nightclub, bar, and lounge cleaning to maintain hygiene and create the perfect guest experience.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Clubs Cleaning"
        description="Maintain a spotless, welcoming club environment with our expert cleaning services tailored for nightlife venues, lounges, and entertainment spaces."
        backgroundImage="/services/clubCleaning1.jpg"
        imageAlt="Clubs Cleaning Services"
      />

      <WwoClubsCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
