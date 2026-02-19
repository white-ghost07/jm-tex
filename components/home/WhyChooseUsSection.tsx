import Link from "next/link";

type Item = {
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    title: "Quality Assurance",
    desc: "Rigorous quality checks at every stage to ensure premium products reach our customers.",
  },
  {
    title: "Competitive Pricing",
    desc: "Strategic partnerships enable us to offer the best market prices without compromising quality.",
  },
  {
    title: "Timely Delivery",
    desc: "Efficient logistics and supply chain management ensure on-time delivery every time.",
  },
  {
    title: "Technical Support",
    desc: "Expert guidance and technical assistance throughout your procurement journey.",
  },
  {
    title: "Global Network",
    desc: "Extensive network of trusted suppliers across major textile manufacturing hubs.",
  },
  {
    title: "Sustainable Solutions",
    desc: "Eco-friendly and sustainable product options for environmentally conscious businesses.",
  },
];

function FeatureCard({ item }: { item: Item }) {
  return (
    <div className="rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-black/10 bg-white p-7 shadow-sm">
      <h3 className="text-[18px] font-semibold text-zinc-900">{item.title}</h3>
      <p className="mt-4 text-[14px] leading-6 text-zinc-600">{item.desc}</p>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <>
      {/* WHY CHOOSE US */}
      <section className="w-full bg-[#EAF2F2] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[12px] font-semibold tracking-[0.2em] text-emerald-700">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-center text-[36px] md:text-[42px] font-semibold text-zinc-900">
            Our Commitment to Excellence
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-[#F4F6F6] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-zinc-900">
            Ready to Get Started?
          </h2>

          <p className="mt-6 text-[15px] leading-7 text-zinc-600">
            Contact us today to discuss your textile raw material requirements
            and discover how we can support your business growth.
          </p>

          <Link
            href={"/contact"}
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Request a Quote
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
