// components/FullFamilySection.tsx
import Image from "next/image";
import img from "@/app/assets/contact-banner.jpg";
export default function FullFamilySection() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-100 lg:h-125">
          <Image
            src={img} // replace with your image
            alt="Full Family Clothing"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold tracking-widest uppercase mb-8">
            {/* Full Family Clothing */} Our Products
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
            <p>
              We bring inspiration and purposeful impact into every stitch and
              seam. What sets us apart is our enthusiasm to collaborate,
              innovate, and craft products with a constant eye on
              sustainability.
            </p>

            <p>
              Our comprehensive multi-category lineup supports our customers
              with fast and competitive sourcing, consistent quality,
              flexibility, and shared values across their product range.
            </p>

            <p>
              Our commitment is simple — delivering quality products and
              services through a culture of excellence, ensuring safety,
              compliance, and a relentless pursuit of perfection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
