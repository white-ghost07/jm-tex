// export default function HeroHeader() {
//   return (
//     <section className="relative bg-black flex items-center px-60   min-h-screen w-full overflow-hidden">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1520975958225-6d1d8d4c7b79?auto=format&fit=crop&w=2200&q=80')",
//         }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 " />

//       {/* Content */}
//       <div className="relative  px-4 sm:px-6 ">
//         <div className="max-w-2xl">
//           <h1 className="text-white font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
//             PURPOSE WOVEN IN EVERY <br /> STITCH
//           </h1>

//           <p className="mt-6 text-white/90 text-base sm:text-lg leading-relaxed">
//             With innovation and purposeful impact from farm to floor, we weave a
//             world where every product has a meaningful story
//           </p>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//     </section>
//   );
// }

"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

import img1 from "@/app/assets/about.png";
import img2 from "@/app/assets/about.png";
import img3 from "@/app/assets/about.png";

type Slide = {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: img1,
    title: "INNOVATION IN MOTION",
    description:
      "Delivering world-class manufacturing solutions with precision and excellence.",
  },
  {
    id: 2,
    image: img2,
    title: "GLOBAL MANUFACTURING",
    description:
      "Trusted by leading brands across the globe for quality and reliability.",
  },
  {
    id: 3,
    image: img3,
    title: "SUSTAINABLE FUTURE",
    description:
      "Committed to responsible production and environmental sustainability.",
  },
];

export default function HeroHeader() {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  // Auto Play
  useEffect(() => {
    if (!slider) return;

    timer.current = setInterval(() => {
      slider.current?.next();
    }, 6000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <section className="w-full relative">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="keen-slider__slide relative h-[70vh] md:h-screen"
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-3xl text-white">
                <h2 className="text-3xl font-semibold tracking-wide md:text-5xl">
                  {slide.title}
                </h2>
                <p className="mt-6 text-sm leading-relaxed md:text-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={() => {
          window.scrollBy({
            top: 800,
            behavior: "smooth",
          });
        }}
        className="mt-8 cursor-pointer absolute left-1/2 -translate-x-1/2 bottom-5 lg:bottom-12 flex flex-col gap-1 text-white"
      >
        <span className="inline-flex h-12 w-8 items-center justify-center rounded-full border-2 border-white font-medium">
          i
        </span>

        <div className="scroll-indicator flex flex-col justify-center leading-none">
          <div className="flex max-w-8 flex-col items-center">
            <span className="text-[16px] font-medium">Scroll</span>
            <span className="text-[22px]">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
