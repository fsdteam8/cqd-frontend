import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoMarineBoatCleaning from "@/components/WwoMarineBoatCleaning";
import React from "react";

export const metadata = {
  title: "Expert Marine and Boat Cleaning Services Near You",
  description:
    "Trust CQD Cleaning for professional marine & boat cleaning. We remove grime, algae & salt buildup to keep your vessel spotless and shining.",
};

const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroImage
        title="Professional Marine & Boat Cleaning"
        description="Keep your marine vessels spotless and seaworthy with CQD’s professional boat cleaning services. We remove salt, grime, and buildup using eco-safe methods for lasting shine and hygiene."
        backgroundImage="/images/marine-boat-cleaning1.jpg"
        imageAlt="marine & boat cleaning"
      />
      <WwoMarineBoatCleaning />
      <HighlightedLocations />
      <Review />
      <ContactSection />
    </div>
  );
};

export default page;
