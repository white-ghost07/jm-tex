import Image from "next/image";
import { allProducts } from "../static/product.data";
import { HeroSection } from "../types/item.type";
import Link from "next/link";

function ProductCard({ card, id }: { card: HeroSection; id: number }) {
  const hasDesc = Boolean(card.description);

  return (
    <div className="group relative aspect-4/5 w-full overflow-hidden bg-zinc-100">
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Base overlay (very light) */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/45" />

      {/* ===== Default Title (always bottom) ===== */}
      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="text-3xl uppercase group-hover:opacity-0 font-semibold tracking-[0.08em] text-white drop-shadow-sm">
          {card.title}
        </h3>
      </div>

      {/* ===== Hover Content (title + desc + button) ===== */}
      {hasDesc && (
        <div className="absolute inset-0 z-20 flex items-end">
          <div
            className={[
              "w-full px-6 pb-6",
              "opacity-0 translate-y-6",
              "transition-all duration-300 ease-out",
              "group-hover:opacity-100 group-hover:translate-y-0",
            ].join(" ")}
          >
            {/* Title on hover (same position style) */}
            <h3 className="text-3xl font-semibold uppercase tracking-[0.08em] text-white">
              {card.title}
            </h3>

            <p className="mt-4 max-w-[90%] whitespace-pre-line text-base leading-6 line-clamp-6 text-white/90">
              {card.description}
            </p>

            <Link
              href={`/products/${id}`}
              className="mt-4 cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline underline-offset-4"
            >
              Learn more
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FullFamilyClothingSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="text-4xl font-semibold uppercase tracking-[0.08em] text-black md:text-5xl">
          FULL FAMILY CLOTHING
        </h2>

        <p className="mt-4 max-w-3xl text-[16px] leading-8 text-zinc-800">
          We carry product expertise in hosiery, denim, knitted apparel, and
          seamless activewear – across all ages, genders, and abilities.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {allProducts?.map((c) => (
            <ProductCard key={c.id} card={c.hero} id={c.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
