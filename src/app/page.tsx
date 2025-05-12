import About from "@/components/About";
import Footer from "@/components/Footer/Footer";
import HeroVideo from "@/components/HeroVideo";
import HighlightedLocations from "@/components/HighlightedLocations";
import HowItWork from "@/components/HowItWork";
import Navbar from "@/components/Navbar/Navbar";
import PricingSection from "@/components/PricingSection";
import TrustedPartners from "@/components/TrustedPartners";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <HeroVideo/>
      <About />
      <WhyChooseUs />
      <HowItWork />
      <TrustedPartners />
      <PricingSection />
      <HighlightedLocations />
      <Footer/>
    </div>
  );
}
