import Aylesbury from "@/components/services/Aylesbury";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";
import Frequently_Asked_Questions from "./_components/Frequently_Asked_Questions";

export const metadata = {
  title: "Cleaning Services in Aylesbury | CQD Commercial Cleaning",
  description:
    "Looking for professional cleaning services in Aylesbury? CQD Cleaning Service offers reliable, eco-friendly, and expert cleaning for offices, schools, gyms, restaurants, and more. Serving Aylesbury and surrounding areas.",
};

const MaidenheadPage = () => {
  return (
    <div>
      <Aylesbury/>
      <ServicesHighlightedLocations
        title="Expert Cleaning Services in Aylesbury & Surrounding Areas"
        description="At CQD Cleaning Service, we provide expert cleaning solutions not only in Aylesbury but also across the surrounding region.
We proudly serve businesses in:
"
      />
     <Frequently_Asked_Questions/>
    </div>
  );
};

export default MaidenheadPage;
