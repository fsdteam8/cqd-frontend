import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoPubliceTransportCleaning from "@/components/WwoPubliceTransportCleaning";
import React from "react";

export const metadata = {
  title: "Public Transport Cleaning Services for Safer Commuting Daily",
  description:
    "CQD Cleaning provides top-tier public transport cleaning services, maintaining hygiene, safety, and comfort across all transit environments.",
};

const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroImage
        title="Public Transport Cleaning"
        description="Ensure buses, trains, and public vehicles stay spotless with CQD’s expert cleaning solutions. We use eco-safe methods to maintain hygiene, safety, and rider confidence."
        backgroundImage="/images/publicTransportCleaning1.jpg"
        imageAlt="public transport Cleaning"
      />
      <WwoPubliceTransportCleaning
      />
      <HighlightedLocations />
      <Review />
      <ContactSection />
    </div>
  );
};

export default page;
