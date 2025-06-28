import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoMarineBoatCleaning from "@/components/WwoMarineBoatCleaning";
import React from "react";

export const metadata = {
  title: "Marine & Boat Cleaning Services | CQD Cleaning Experts",
  description:
    "Keep your marine vessels spotless and seaworthy with CQD’s professional boat cleaning services. We remove salt, grime, and buildup using eco-safe methods for lasting shine and hygiene.",
};

const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroImage
        title="Professional Marine & Boat Cleaning"
        description="Keep your marine vessels spotless and seaworthy with CQD’s professional boat cleaning services. We remove salt, grime, and buildup using eco-safe methods for lasting shine and hygiene."
        backgroundImage="/images/marine-boat-cleaning1.jpg"
        imageAlt="Professional Marine & Boat Cleaning"
      />
      <WwoMarineBoatCleaning />
      <HighlightedLocations />
      <Review />
      <ContactSection />
    </div>
  );
};

export default page;
