import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoCommercialFleetLogistic from "@/components/WwoCommercialFleetLogistic";
import React from "react";

export const metadata = {
  title: "Expert Cleaning for Commercial Fleet & Logistic Vehicles",
  description:
    "CQD provides expert cleaning for commercial fleets & logistic vehicles. Quick, efficient service for your business needs.",
};

const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroImage
        title="Professional Commercial Fleet & Logistic Vehicles Cleaning"
        description="Ensure your commercial fleet and logistics vehicles maintain a pristine image and hygienic standard with CQD Cleaning Services."
        backgroundImage="/images/commercial-fleet1.jpg"
        imageAlt="commercial fleets & logistic vehicles"
      />
      <WwoCommercialFleetLogistic />
      <HighlightedLocations />
      <Review />
      <ContactSection />
    </div>
  );
};

export default page;
