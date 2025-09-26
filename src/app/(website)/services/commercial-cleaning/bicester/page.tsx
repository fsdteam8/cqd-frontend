import Bicester from "@/components/services/Bicester";
import ServicesHighlightedLocations from "@/components/services/ServicesHighlightedLocations";
import React from "react";
import FAQ from "./_components/FAQ";

export const metadata = {
  title: "Commercial Cleaning Services in Bicester | CQD Cleaning",
  description:
    " Looking for professional commercial cleaning services in Bicester? CQD Cleaning Service provides reliable, eco-friendly cleaning for offices, schools, gyms, and more.",
};

const MaidenheadPage = () => {
  return (
    <div>
      <Bicester />
      <ServicesHighlightedLocations
        title="Expert Cleaning Services in Bicester & Surrounding Areas"
        description="At CQD Cleaning Service, we provide expert commercial cleaning solutions in Bicester and the surrounding towns. We serve businesses in Bicester, Northampton, Milton Keynes, High Wycombe, Watford, London, Aylesbury, Slough, Reading, Maidenhead, Bracknell, Beaconsfield, Buckinghamshire, and Berkshire. No matter the location, our team ensures high-quality, reliable cleaning services for offices, retail spaces, healthcare facilities, and other commercial properties, helping businesses maintain spotless, hygienic, and welcoming environments.
"
      />
      <FAQ/>
    </div>
  );
};

export default MaidenheadPage;
