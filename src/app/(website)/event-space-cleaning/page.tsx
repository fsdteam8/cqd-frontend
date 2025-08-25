import ContactSection from "@/components/Contact";
import { HeroImage } from "@/components/HeroImage";
import HighlightedLocations from "@/components/HighlightedLocations";
import Review from "@/components/Review";
import WwoEventSpaceCleaning from "@/components/WwoEventSpaceCleaning";
import React from "react";

export const metadata = {
  title: "Event Space Cleaning | Professional Cleaning Services for Venues",
  description:
    "Ensure a spotless and hygienic venue with our expert Event Space Cleaning services. From post-event cleanup to regular maintenance, we keep your space safe, clean, and guest-ready.A clean event space is essential for creating a positive and memorable experience for guests. Whether it’s a conference, wedding, or corporate gathering, maintaining a spotless venue ensures safety, hygiene, and comfort for everyone attending. Professional event space cleaning not only enhances the overall appearance of the venue but also promotes a healthy environment, reduces the risk of infections, and leaves guests impressed with a well-maintained, welcoming space.",
};

const Page = () => {
  return (
    <div>
      <HeroImage
        title="Professional Event Space Cleaning"
        description="Keep your venue spotless and guest-ready with our expert event space cleaning services—ideal for pre- and post-event sanitation."
        backgroundImage="/services/eventSpaceCleaning1.jpg"
        imageAlt="Event Space Cleaning Services"
      />

      <WwoEventSpaceCleaning />
      <Review />
      <HighlightedLocations />
      <ContactSection />
    </div>
  );
};

export default Page;
