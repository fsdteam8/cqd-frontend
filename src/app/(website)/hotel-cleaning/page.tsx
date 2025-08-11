import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import HotelCleaningFaq from "@/components/HotelCleaningFaq";
import Review from "@/components/Review";
import WwoHotelCleaning from "@/components/WwoHotelCleaning";
import React from "react";

export const metadata = {
  title: "Professional Hotel Cleaning Services by CQD Experts",
  description:
    "At CQD Cleaning Services, we provide top-tier hotel cleaning services that ensure a pristine, welcoming environment for every guest. From luxury suites to bustling lobbies, our skilled team is trained to follow the highest hygiene protocols, creating a safe and memorable experience for your guests.",
  // description:
  //   "CQD offers comprehensive hotel cleaning solutions using eco-friendly products and meticulous methods to ensure spotless, sanitized, and welcoming environments for guests and staff.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Premium Hotel Cleaning Services Elevate the Guest Experience with Exceptional Cleanliness"
        // title="Professional Hotel Cleaning"
        description="Ensure a pristine and welcoming atmosphere for your guests with our expert hotel cleaning services tailored to meet the highest hospitality standards."
        backgroundImage="/services/hotelCleaning1.jpg"
        imageAlt="Hotel Cleaning Services"
      />

      <WwoHotelCleaning />
      <Review />
      <HighlightedLocations />
      <HotelCleaningFaq />
      <ContactSection />
    </div>
  );
};

export default Page;
