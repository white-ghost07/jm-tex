import About from "@/components/home/About";
import HeroHeader from "@/components/home/HeroHeader";
import FullFamilyClothingSection from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <About />
      <FullFamilyClothingSection />
    </div>
  );
}
