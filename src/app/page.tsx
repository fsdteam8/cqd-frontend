import About from "@/components/About";
import HowItWork from "@/components/HowItWork";
import PricingSection from "@/components/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <h1 className="text-3xl font-bold underline">C Q D</h1>
      <About />
      <WhyChooseUs />
      <HowItWork />
      <PricingSection />
    </div>
  );
}
