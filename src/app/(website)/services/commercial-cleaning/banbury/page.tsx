import Banbury from "@/components/services/Banbury";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";
import FAQ from "./_components/FAQ";

export const metadata = {
  title: " Commercial Cleaning Services in Banbury | CQD Cleaning",
  description:
    " Looking for professional commercial cleaning services in Beaconsfield? CQD Cleaning provides reliable, eco-friendly cleaning for offices, schools, gyms, restaurants, and more. Serving Beaconsfield and surrounding areas.",
};

const MaidenheadPage = () => {
  return (
    <div>
      <Banbury />
      <ServicesHighlightedLocations
        title="Expert Cleaning Services in Banbury & Surrounding Areas "
        description={` CQD Cleaning Service proudly delivers cleaning solutions in Banbury and across the surrounding Oxfordshire and Buckinghamshire regions, including:`}
      />
      <FAQ/>
    </div>
  );
};

export default MaidenheadPage;
