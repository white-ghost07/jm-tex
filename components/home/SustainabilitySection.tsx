import Image from "next/image";
import img from "@/app/assets/sus.png";
export default function SustainabilitySection() {
  return (
    <section className="w-full bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src={img} // replace with your image
              alt="Sustainability"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-wide leading-tight uppercase">
              COMMIT. EMPOWER.
              <br />
              LEAD: PURPOSE TO
              <br />
              IMPACT
            </h2>

            <div className="mt-8 space-y-6 text-gray-700 leading-relaxed text-[17px]">
              <p>
                At Interloop, sustainability is our purpose and responsibility
                to the planet and to each other. By prioritising sustainable
                practices, we are creating positive impacts that extend far
                beyond our company.
              </p>

              <p>
                We recognise that sustainability is a journey that requires
                collective action. As members of the United Nations Global
                Compact, we actively contribute to advancing sustainable
                development and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
