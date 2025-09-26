import HighWycombe from "@/components/services/High-wycombe";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";

export const metadata = {
  title: " Commercial Cleaning Services in High Wycombe | CQD Cleaning ",
  description:
    " Looking for commercial cleaning services in High Wycombe? CQD Cleaning Service offers reliable, professional, and eco-friendly cleaning service.",
};

const MiltonKeynesPage = () => {
  return (
     <div>
        <HighWycombe />
        <ServicesHighlightedLocations
          title="Expert Cleaning Services in Maidenhead & Surrounding Areas"
          description="At CQD Cleaning Service, we deliver expert cleaning services across High Wycombe and the wider region."
        />
      </div>
  );
};

export default MiltonKeynesPage;
