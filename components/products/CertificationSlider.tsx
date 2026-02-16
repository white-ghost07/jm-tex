"use client";

import Image, { StaticImageData } from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
type Props = {
  items: StaticImageData[];
  title?: string;
  onViewAll?: () => void;
};

export default function CertificationSlider({
  items,
  title = "CERTIFICATIONS",
  onViewAll,
}: Props) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rubberband: true,
    mode: "free-snap",
    slides: {
      origin: "auto",
      perView: "auto",
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { origin: "auto", perView: "auto", spacing: 50 },
      },
    },
  });

  return (
    <section className="mx-auto max-w-350  px-4 sm:px-6 my-12 bg-white">
      <div className="  py-14">
        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>

        <div className="mt-10 ">
          <div ref={sliderRef} className="keen-slider  overflow-visible!">
            {items.map((img, i) => (
              <div key={i} className="keen-slider__slide w-auto!">
                {/* fixed slot */}
                <div className=" md:w-56 h-30 flex justify-end ml-6 items-center ">
                  <Image
                    src={img}
                    alt={`certificate-${i + 1}`}
                    className="max-h-24 w-auto object-contain opacity-90 grayscale"
                    draggable={false}
                    priority={i < 3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="mt-14 text-lg font-semibold hover:opacity-80"
        >
          View all
        </button>
      </div>
    </section>
  );
}
