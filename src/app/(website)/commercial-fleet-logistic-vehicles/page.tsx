import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoCommercialFleetLogistic from "@/components/WwoCommercialFleetLogistic";
import React from "react";

export const metadata = {
  title: "Commercial Fleet & Logistic Vehicle Cleaning | CQD Services",
  description:
    "Ensure your commercial fleet and logistics vehicles maintain a pristine image and hygienic standard with CQD Cleaning Services.",
};

const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroImage
        title="Professional Commercial Fleet & Logistic Vehicles Cleaning"
        description="Ensure your commercial fleet and logistics vehicles maintain a pristine image and hygienic standard with CQD Cleaning Services."
        backgroundImage="/images/commercial-fleet1.jpg"
        imageAlt="Professional Commercial Fleet & Logistic Vehicles Cleaning"
      />
      <WwoCommercialFleetLogistic />
      <HighlightedLocations />
      <Review />
      <ContactSection />
    </div>
  );
};

export default page;
