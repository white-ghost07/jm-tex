import Image from "next/image";
import Link from "next/link";
import t1 from "@/app/assets/products/logos/logo1.png";
import t2 from "@/app/assets/products/logos/logo2.png";
import t3 from "@/app/assets/products/logos/logo3.png";
import t4 from "@/app/assets/products/logos/logo4.png";
import t5 from "@/app/assets/products/logos/logo5.png";
import t6 from "@/app/assets/products/logos/logo6.png";
import t7 from "@/app/assets/products/logos/logo7.png";
import t8 from "@/app/assets/products/logos/logo8.png";
import t9 from "@/app/assets/products/logos/c10.png";
import t10 from "@/app/assets/products/logos/c11.png";
import t11 from "@/app/assets/products/logos/c12.png";
import t12 from "@/app/assets/products/logos/c13.png";
import t13 from "@/app/assets/products/logos/c14.png";
import t14 from "@/app/assets/products/logos/c15.png";
import t15 from "@/app/assets/products/logos/c16.png";
import t16 from "@/app/assets/products/logos/c17.png";

const logosTop = [
  { name: "Adidas", src: t1 },
  { name: "Target", src: t2 },
  { name: "Bestseller", src: t3 },
  { name: "Tom Tailor", src: t4 },
  { name: "Carhartt", src: t5 },
];
const logosTop1 = [
  { name: "Adidas", src: t10 },
  { name: "Target", src: t12 },
  { name: "Bestseller", src: t13 },
  { name: "Tom Tailor", src: t14 },
  { name: "Carhartt", src: t15 },
];

const logosBottom = [
  { name: "Katin", src: t6 },
  { name: "Urban Outfitters", src: t7 },
  { name: "U.S. Polo Assn.", src: t8 },
  { name: "Lee", src: t9 },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bg-white py-16 sm:py-20">
          {/* Title */}
          <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-[0.2em]">
            TRUSTED BY
          </h2>

          {/* Logos */}
          <div className="mt-16 space-y-14">
            {/* Top Row */}
            <div className="mx-auto max-w-275 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-10">
              {logosTop.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={300}
                    height={120}
                    className="h-auto max-h-30 w-auto object-contain grayscale opacity-80"
                  />
                </div>
              ))}
            </div>
            <div className="mx-auto max-w-275 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-10">
              {logosTop1.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={300}
                    height={120}
                    className="h-auto max-h-30 w-auto object-contain grayscale opacity-80"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="mx-auto max-w-275 grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-10">
              {logosBottom.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={300}
                    height={120}
                    className="h-auto max-h-35 w-auto object-contain grayscale opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
