import Oxford from "@/components/services/Oxford";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";

export const metadata = {
  title:
    "Commercial Cleaning Services Oxford | Trusted Cleaners in Oxfordshire",
  description:
    "Looking for reliable commercial cleaning services in Oxford? Our expert cleaners provide top-quality cleaning for businesses in Oxford and Oxfordshire.",
};

const OxfordPage = () => {
  return (
    <div>
      <Oxford />
      <ServicesHighlightedLocations
        title="Expert Cleaning Services in Oxford and Surrounding Areas "
        description="At CQD Cleaning Service, we proudly provide professional cleaning solutions not only in Oxford but also across the wider region. Whether you need office cleaning, commercial cleaning, or specialist cleaning services, our expert team is ready to serve businesses in the following areas:"
      />
    </div>
  );
};

export default OxfordPage;
