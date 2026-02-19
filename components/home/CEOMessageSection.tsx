import Image from "next/image";
import ceo from "@/app/assets/ceo.png";
export default function CEOMessageSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: CIRCLE IMAGE */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full">
              <Image
                src={ceo} // replace with your image
                alt="CEO"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-wide uppercase">
              MESSAGE OF THE CEO
            </h2>

            <div className="mt-8 space-y-6 text-[17px] leading-8 text-zinc-700">
              <p>
                At Interloop, our purpose is to be a force for positive
                change—for our people, our partners, our communities, and the
                planet. This belief guides every decision we make and every
                action we take: to create opportunity, reduce our environmental
                footprint, and make a lasting impact.
              </p>

              <p>
                This year, we’ve made meaningful progress, from expanding
                equitable career pathways and launching our differently abled
                inclusion program to transitioning 80% of our fuel to low-carbon
                sources. We’ve deepened our investments in clean energy,
                traceable supply chains, and regenerative farming, now
                supporting over 2,000 local farmers.
              </p>

              <p>
                Our new LEED Platinum-certified apparel plant has set a global
                benchmark for green manufacturing, a proud milestone made
                possible by our incredible teams.
              </p>
            </div>

            <div className="mt-10 text-xl font-semibold text-black">
              Navid Fazil, CEO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
