import { Monitor, PenTool, Shirt, MapPinned } from "lucide-react";

const services = [
  {
    title: "Design Collaboration",
    desc: "Providing trend analysis and market insights to help our customers in creating focused product collections.",
    Icon: Monitor,
  },
  {
    title: "Digital Sampling",
    desc: "Integrated true-to-life digital sampling with intricate fabric detail for seamless design collaboration and enhanced efficiency.",
    Icon: PenTool,
  },
  {
    title: "Product Development",
    desc: "With precision engineering, advanced automation, and rigorous quality checks, our bulk production offers manufacturing excellence at scale.",
    Icon: Shirt,
  },
  {
    title: "Track your Order",
    desc: "Leveraging our exclusive technology, Looptrace, we provide our customers with transparent raw material insights and product tracking services.",
    Icon: MapPinned,
  },
];

export default function TopServicesPage() {
  return (
    <main className="w-full bg-white">
      {/* Top spacing like screenshot */}
      <section className="mx-auto max-w-350 px-6 py-20 md:px-12 md:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-semibold tracking-[0.12em] text-black md:text-[44px]">
            YOUR PARTNER IN DIGITAL DESIGN
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-7 text-gray-600 md:text-[18px] md:leading-8">
            Embracing digital sampling, we champion sustainability through
            streamlined efficiency and innovative solutions. We are partnering
            closely with customers, offering research, design, and technical
            expertise for a collaborative journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-7xl gap-5 grid-cols-1 overflow-hidden border border-gray-200 md:grid-cols-4">
          {services.map((s, idx) => (
            <ServiceCard
              key={idx}
              {...s}
              isLast={idx === services.length - 1}
            />
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-16 text-center">
          <p className="text-[18px] font-semibold text-black">
            Explore all services
          </p>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  title,
  desc,
  Icon,
  isLast,
}: {
  title: string;
  desc: string;
  Icon: React.ElementType;
  isLast: boolean;
}) {
  return (
    <div
      className={[
        "bg-white px-5 py-8  ",
        // vertical dividers like screenshot
        !isLast ? "md:border-r md:border-gray-200" : "",
        "border-b border-gray-200 md:border-b-0",
      ].join(" ")}
    >
      <div className="relative">
        {/* icon */}
        <div className="relative inline-flex h-14 w-14 items-center justify-center">
          <Icon className="h-12 w-12 text-gray-600" strokeWidth={1.5} />

          {/* small blue dot accent */}
          <span className="absolute right-1 top-8 h-3 w-3 rounded-full bg-sky-500" />
        </div>

        <h3 className="mt-7 text-2xl font-medium text-black">{title}</h3>

        <p className="mt-4 text-lg leading-7 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
