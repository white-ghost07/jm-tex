import Image from "next/image";
import img from "@/app/assets/contact-banner.jpg";

export default function ContactHeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-5 py-10 md:py-16">
        <div className="relative overflow-hidden rounded-sm">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={img}
              alt="Contact hero background"
              fill
              priority
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative flex min-h-[520px] flex-col justify-between gap-10 px-7 py-10 md:min-h-[560px] md:flex-row md:items-center md:justify-between md:px-12 md:py-14">
            {/* LEFT SIDE */}
            <div className="max-w-xl">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-white backdrop-blur">
                CONTACT US
              </div>

              <h1 className="mt-6 text-5xl font-light leading-[1.05] text-white md:text-6xl">
                Let’s Connect
              </h1>

              <div className="mt-4 h-[3px] w-[240px] rounded-full bg-white/70" />

              <p className="mt-6 max-w-md text-sm leading-7 text-white/90">
                Our team will onboard you into our process
                <br />
                and you can learn more about how we can
                <br />
                collaborate.
              </p>
            </div>

            {/* RIGHT INFO CARD */}
            <div className="w-full max-w-md">
              <div className="rounded-2xl bg-white p-7 shadow-[0_20px_70px_rgba(0,0,0,0.4)]">
                <div className="inline-flex items-center rounded-full bg-zinc-100 px-4 py-2 text-[10px] font-semibold tracking-[0.22em] text-black">
                  JM Tex Design LTD
                </div>

                <h3 className="mt-4 text-2xl font-medium text-black">
                  JM Tex Design
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  No. 25, Rheinland Place, Colombo 03, Sri Lanka
                </p>

                <div className="mt-6 space-y-2 text-sm text-zinc-700">
                  <p>
                    <span className="text-zinc-500">Tel:</span> +(94) 114727222
                  </p>
                  <p>
                    <span className="text-zinc-500">Fax:</span> +(94) 112575485
                  </p>
                  <p>
                    <span className="text-zinc-500">Email:</span>{" "}
                    <a
                      href="mailto:info@brandix.com"
                      className="underline decoration-zinc-300 underline-offset-4 hover:decoration-black"
                    >
                      info@jmtexdesign.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
