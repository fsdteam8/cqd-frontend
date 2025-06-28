import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoPrivateTransportCleaning from "@/components/WwoPrivateTransportCleaning";
import React from "react";

export const metadata = {
  title:
    "Private Transport Cleaning Services | Safe & Professional | CQD Cleaning",
  description:
    "Enhance the cleanliness and appearance of your private vehicles with CQD’s expert cleaning. We use eco-friendly methods to remove dirt, stains, and odors—inside and out.",
};

const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroImage
        title="Professional Private Transport Cleaning"
        description="Enhance the cleanliness and appearance of your private vehicles with CQD’s expert cleaning. We use eco-friendly methods to remove dirt, stains, and odors—inside and out."
        backgroundImage="/images/private-transport1.jpg"
        imageAlt="Professional Private Transport Cleaning"
      />
      <WwoPrivateTransportCleaning />
      <HighlightedLocations />
      <Review />
      <ContactSection />
    </div>
  );
};

export default page;
