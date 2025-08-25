import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import ShowroomCleaningFaq from "@/components/ShowroomCleaningFaq";
import WwoShowroomCleaning from "@/components/WwoShowroomCleaning";
import React from "react";

export const metadata = {
  title: "Premium Showroom Cleaning Services by CQD Professionals",
  description:
    "CQD offers high-quality showroom cleaning solutions designed to maintain a spotless and impressive display space. We use eco-friendly products and advanced techniques to ensure your showroom always looks its best.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        // title="Professional Showroom Cleaning"
        title="Professional Showroom Cleaning Service | Book Now To Attract More Customers!"
        description="Keep your showroom pristine and inviting with our expert cleaning services, tailored to highlight your products and create a welcoming environment."
        backgroundImage="/services/showRoomCleaning1.jpg"
        imageAlt="Showroom Cleaning Services"
      />

      <WwoShowroomCleaning />
      <ShowroomCleaningFaq/>
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
