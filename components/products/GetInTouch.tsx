import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="bg-[#f4f4f4] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bg-white px-8 sm:px-16 py-14 sm:py-20">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-slate-900">
            GET IN TOUCH WITH US
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-slate-600 text-base sm:text-lg leading-relaxed">
            We’re committed to collaborate with like-minded partners. Get in
            touch with us for your apparel production needs.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="text-lg font-semibold text-slate-900 hover:opacity-70 transition"
            >
              Contact us now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
