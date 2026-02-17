const items = [
  {
    title: "People",
    desc: "Together we are a team of diverse expertise but one purpose – to be agents of positive change",
  },
  {
    title: "Digitalised operations",
    desc: "We drive operational efficiencies through digitalisation and a lean mindset across all our practices",
  },
  {
    title: "Sustainability at scale",
    desc: "Manufacture products responsibly on a large industrial scale through resource conservation and innovation",
  },
  {
    title: "Transparency",
    desc: "We use data led approach to provide complete transparency to our stakeholders – a partner of choice for all",
  },
];

export default function HowWeDoItSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          {/* LEFT */}
          <div className="md:col-span-5">
            <h2 className="text-4xl font-semibold uppercase  text-black md:text-5xl">
              HOW WE DO IT
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-zinc-800">
              Everything we do is rooted in our mission.
            </p>

            <p className="mt-6 text-[16px] leading-8 text-zinc-800">
              We strive to be an agent of positive change for the stakeholders
              and community by pursuing an ethical and sustainable business. It
              guides the way we do business, how we create our products, how we
              collaborate with our customers, and how we work with our supply
              chain partners. It defines who we are.
            </p>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="space-y-5">
              {items.map((it) => (
                <div key={it.title}>
                  <h3 className="text-[22px] font-semibold text-black md:text-[24px]">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[16px] leading-8 text-zinc-800">
                    {it.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
