import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoPrivateTransportCleaning from "@/components/WwoPrivateTransportCleaning";
import React from "react";

export const metadata = {
  title:
    "Private Transport Cleaning | Expert Vehicle & Car Cleaning Services",
  description:
    "Keep your private vehicles clean and hygienic with our expert private transport cleaning services. We specialize in deep cleaning, sanitization, and detailing for cars, vans, and other private transport.",
};

const Page = () => {
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

export default Page;
