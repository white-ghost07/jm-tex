import About from "@/components/home/About";
import CEOMessageSection from "@/components/home/CEOMessageSection";
import HeroHeader from "@/components/home/HeroHeader";
import FullFamilyClothingSection from "@/components/home/Products";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <About />
      <FullFamilyClothingSection />
      {/* <SustainabilitySection /> */}
      <CEOMessageSection />
      <WhyChooseUsSection />
    </div>
  );
}
