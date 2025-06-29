import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoPrivateTransportCleaning from "@/components/WwoPrivateTransportCleaning";
import React from "react";

export const metadata = {
  title:
    "Safe and Professional Private Transport Cleaning Solutions",
  description:
    "CQD Cleaning offers professional private transport cleaning for cars, vans, and more. Keep your ride fresh and sanitized. Call us now!",
};

const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroImage
        title="Professional Private Transport Cleaning"
        description="Enhance the cleanliness and appearance of your private vehicles with CQD’s expert cleaning. We use eco-friendly methods to remove dirt, stains, and odors—inside and out."
        backgroundImage="/images/private-transport1.jpg"
        imageAlt="private transport cleaning"
      />
      <WwoPrivateTransportCleaning />
      <HighlightedLocations />
      <Review />
      <ContactSection />
    </div>
  );
};

export default page;
