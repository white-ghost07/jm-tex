import Image from "next/image";
import img from "@/app/assets/Global-Footprint.jpg";
export default function GlobalFootprintImageMap() {
  return (
    <section className="w-full py-16">
      <h2 className="text-center text-3xl font-semibold tracking-widest text-black">
        GLOBAL FOOTPRINT
      </h2>

      <div className="mx-auto mt-10 w-full max-w-6xl px-4">
        {/* wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* keep ratio similar to screenshot */}
          <div className="relative w-full ">
            {/* YOUR MAP IMAGE */}
            <Image
              src={img} // ✅ change to your image path
              alt="Global footprint"
              width={1000}
              height={700}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
