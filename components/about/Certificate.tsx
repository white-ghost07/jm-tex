"use client";

import Image, { StaticImageData } from "next/image";

import c1 from "@/app/assets/about/c1.svg";
import c2 from "@/app/assets/about/c2.svg";
import c3 from "@/app/assets/about/c3.svg";
import c4 from "@/app/assets/about/c4.svg";
import c5 from "@/app/assets/about/c5.svg";
import c6 from "@/app/assets/about/c6.svg";
import c7 from "@/app/assets/about/c7.svg";
import c8 from "@/app/assets/about/c8.webp";

type Cert = { name: string; src: StaticImageData };

const certs: Cert[] = [
  { name: "WRAP", src: c1 },
  { name: "SLCP", src: c2 },
  { name: "SMETA", src: c3 },
  { name: "SA 8000", src: c4 },
  { name: "BSCI", src: c5 },
  { name: "ISO", src: c6 },
  { name: "LEED", src: c7 },
  { name: "NIST", src: c8 },
];

function CertCard({ item }: { item: Cert }) {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
      <div className="relative mx-auto flex aspect-3/3 w-full items-center justify-center">
        <Image
          src={item.src}
          alt={item.name}
          fill
          className="object-contain p-1  grayscale contrast-125 transition duration-300 group-hover:grayscale-0"
        />
      </div>
    </div>
  );
}

export default function CertificationsBW_Minimal() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[360px_1fr] items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-zinc-900 uppercase">
              Certifications
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-zinc-900">
              Verified. Audited. <br className="hidden md:block" />
              Compliant.
            </h2>

            <p className="mt-6 text-sm leading-7 text-zinc-600 max-w-sm">
              Globally recognized standards that ensure quality, safety, and
              responsible operations.
            </p>

            <div className="mt-8 h-0.5 w-14 bg-zinc-900/20" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {certs.map((c) => (
              <CertCard key={c.name} item={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
