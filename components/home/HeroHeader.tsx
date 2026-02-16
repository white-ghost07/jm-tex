export default function HeroHeader() {
  return (
    <section className="relative bg-black flex items-center px-60   min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975958225-6d1d8d4c7b79?auto=format&fit=crop&w=2200&q=80')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative  px-4 sm:px-6 ">
        <div className="max-w-2xl">
          <h1 className="text-white font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            PURPOSE WOVEN IN EVERY <br /> STITCH
          </h1>

          <p className="mt-6 text-white/90 text-base sm:text-lg leading-relaxed">
            With innovation and purposeful impact from farm to floor, we weave a
            world where every product has a meaningful story
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
}
