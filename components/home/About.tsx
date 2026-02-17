import React from "react";
import { Globe, ShieldCheck, FileSearch } from "lucide-react";

type AboutItem = {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const items: AboutItem[] = [
  { title: "Minimising Environmental\nImpact", Icon: Globe },
  { title: "Prioritising Worker\nWell-Being", Icon: ShieldCheck },
  { title: "Maintaining Global\nStandards", Icon: FileSearch },
];

export default function About() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
        {/* TOP */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-[0.15em] text-black md:text-5xl">
            ABOUT US
          </h2>

          <p className="mt-6 text-[18px] tracking-[0.12em] text-black">
            Sustainability and Innovation are what drive us.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-[16px] leading-8 tracking-[0.08em] text-black/80">
            Committed to our vision of producing apparel in a responsible way.
            We continue to leverage three decades of manufacturing expertise to
            conceptualise, design, and craft products that make us proud every
            single day.
          </p>
        </div>

        {/* ICON GRID */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 md:mt-20 md:grid-cols-3">
          {items.map(({ title, Icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              {/* Icon circle wrapper */}
              <div className="flex h-20 w-20 items-center justify-center">
                <Icon className="h-16 w-16 text-black/70" strokeWidth={1.2} />
              </div>

              <h3 className="mt-6 whitespace-pre-line text-xl font-semibold tracking-[0.08em] text-black">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
