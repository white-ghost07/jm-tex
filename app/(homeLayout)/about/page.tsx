import Image from "next/image";
import img from "@/app/assets/about.png";
import HowWeDoItSection from "@/components/about/HowWeDoIt";
import GlobalFootprintImageMap from "@/components/about/GlobalFootprintImageMap";
import CertificationsModern from "@/components/about/Certificate";
export default function AdbotPage() {
  return (
    <section className="w-full mx-auto max-w-7xl my-20 bg-white">
      <div className=" px-4 py-10 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* LEFT: IMAGE */}
          <div className="w-full lg:flex-1">
            <div className="relative w-full overflow-hidden bg-zinc-100 aspect-4/3 sm:aspect-16/10 md:aspect-3/4 lg:aspect-3/3">
              <Image
                src={img}
                alt="Legacy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full lg:flex-1 lg:pl-6">
            <h2 className="text-2xl font-medium leading-snug sm:text-3xl sm:leading-snug md:text-4xl md:leading-relaxed">
              OUR LEGACY OF RESPONSIBLE
              <br className="hidden sm:block" />
              MANUFACTURING
              <br className="hidden sm:block" />
              CONTINUES
            </h2>

            <div className="mt-6 space-y-5 text-[14px] leading-6 text-zinc-800 sm:text-[15px] sm:leading-7 md:text-[16px] md:leading-7">
              <p>
                As a pioneer in the hosiery industry and one of its largest
                global supplier, Interloop has now grown into a multi-category
                manufacturing company. We are a vertically integrated, full
                family clothing supplier of hosiery, denim, knitted apparel and
                seamless activewear for world leading brands and retailers.
              </p>

              <p>
                We started humbly with 10 knitting machines in 1992. With
                relentless hard work and passion, we established ourselves as a
                trusted partner known for their ethical and sustainable
                practices. We have carried forward the same drive and values
                into our new product categories.
              </p>

              <p>
                Today with 37,000+ people, presence in six countries, and
                meaningful relationships with our partners around the globe, we
                are proud to be leading the way in responsible manufacturing
                meeting the highest standards of social and environmental
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <HowWeDoItSection />
      <GlobalFootprintImageMap />

      <section className="w-full  py-10">
        <div className="w-full px-6">
          <div className="relative w-full aspect-video overflow-hidden shadow-lg">
            <Image
              src={img} // replace with your image path
              alt="Factory Manufacturing"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <CertificationsModern />
    </section>
  );
}
