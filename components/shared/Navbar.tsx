"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import img from "@/app/assets/hover.jpg";
import Image from "next/image";
type NavItem = { label: string; href: string; dropdown?: boolean };

const navLinks: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", dropdown: true },
  //   { label: "Purpose", href: "/purpose", dropdown: true },
  //   { label: "Culture", href: "/culture" },
  //   { label: "Stories", href: "/stories" },
  //   { label: "Investors", href: "/investors", dropdown: true },
  { label: "Contact", href: "/contact" },
];

const productItems = [
  { label: "Yarns", id: 3 },
  { label: "Apparel", id: 2 },
  { label: "Activewear", id: 4 },
  { label: "Hosiery", id: 1 },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Mega menu
  const [productsOpen, setProductsOpen] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    // close on route change
    setDrawerOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const openProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const scheduleCloseProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setProductsOpen(false), 120);
  };

  const textColor = scrolled ? "text-slate-900" : "text-white";
  const iconColor = scrolled ? "text-slate-900" : "text-white";
  const headerBg = scrolled
    ? "bg-white/95 backdrop-blur shadow-sm"
    : "bg-transparent";
  const diff =
    pathname === "/"
      ? headerBg
      : "bg-white/95 backdrop-blur shadow-sm mb-24 text-black";
  console.log({ pathname });
  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${diff}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div
                className={`text-3xl font-extrabold uppercase tracking-tight ${pathname === "/" ? textColor : "text-black"}`}
              >
                JM Tex <span className="text-sky-500">Design</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7 relative">
              {navLinks.map((item) => {
                if (item.label === "Products") {
                  return (
                    <div
                      key={item.href}
                      className=""
                      onMouseEnter={openProducts}
                      onMouseLeave={scheduleCloseProducts}
                    >
                      {/* Trigger */}
                      <Link
                        href={item.href}
                        className={`text-sm font-medium transition-opacity hover:opacity-80 ${pathname === "/" ? textColor : "text-black"} flex items-center    `}
                      >
                        <span className={productsOpen ? "text-sky-500" : ""}>
                          Products
                        </span>
                        <span className=" translate-y-px">
                          <ChevronRight
                            className={
                              productsOpen
                                ? "rotate-90 transition-transform duration-300 text-sky-500"
                                : ""
                            }
                            size={18}
                          />
                        </span>
                      </Link>

                      {/* Mega Menu */}
                      <div
                        className={[
                          "absolute left-36 -translate-x-1/2 top-12.5",
                          "w-175 bg-white rounded-none shadow-2xl",
                          "border border-black/5",
                          "transition-all duration-150",
                          productsOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-1 pointer-events-none",
                        ].join(" ")}
                        onMouseEnter={openProducts}
                        onMouseLeave={scheduleCloseProducts}
                      >
                        <div className="grid grid-cols-[220px_1fr] min-h-90 ">
                          {/* Left list */}
                          <div className="py-6">
                            <div className="flex flex-col">
                              {productItems.map((p) => (
                                <Link
                                  key={p.id}
                                  href={`/products/${p.id}`}
                                  className="px-8 py-4 hover:bg-slate-300 text-sm transition-all duration-300 font-medium text-slate-800 hover:text-slate-900"
                                >
                                  {p.label}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Right featured */}
                          <div className="border-l border-slate-200 p-10">
                            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                              Featured
                            </h3>

                            <div className="mt-5">
                              <div className="w-full h-full overflow-hidden bg-slate-100">
                                {/* replace image URL with your own */}
                                <Image
                                  src={img}
                                  alt="Featured"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="border-t border-slate-200 px-8 py-5 flex items-center justify-between">
                          {/* Social icons (simple circles like screenshot) */}
                          <div className="flex items-center gap-3">
                            {[
                              { label: "YouTube", href: "#" },

                              { label: "LinkedIn", href: "#" },
                            ].map((s) => (
                              <a
                                key={s.label}
                                href={s.href}
                                className="w-9 h-9 rounded-full bg-black text-white grid place-items-center text-[12px] font-bold hover:opacity-90"
                                aria-label={s.label}
                              >
                                {s.label === "YouTube"
                                  ? "▶"
                                  : s.label === "Instagram"
                                    ? "◎"
                                    : s.label === "X"
                                      ? "X"
                                      : "in"}
                              </a>
                            ))}
                          </div>

                          <Link
                            href="/careers"
                            className="text-sm font-semibold text-slate-900 hover:opacity-80"
                          >
                            Explore Careers
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Normal links
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-opacity hover:opacity-80 ${pathname === "/" ? textColor : "text-black"} flex items-center gap-1`}
                  >
                    {item.label}
                    {item.dropdown ? (
                      <span className="text-xs translate-y-px">▾</span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile right */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                aria-label="Search"
                className={`p-2 rounded-full hover:bg-black/10 transition ${iconColor}`}
              >
                🔍
              </button>
              <button
                aria-label="Open menu"
                className={`p-2 rounded-full hover:bg-black/10 transition ${iconColor}`}
                onClick={() => setDrawerOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (simple) */}
      <div
        className={`fixed inset-0 z-60 transition ${drawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${drawerOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[320px] bg-white shadow-xl transition-transform ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-20 px-4 flex items-center justify-between border-b">
            <div className="text-lg font-bold">
              INTERL<span className="text-sky-500">O</span>P
            </div>
            <button
              className="p-2 rounded hover:bg-slate-100"
              onClick={() => setDrawerOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="p-4 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/careers"
                className="block text-center rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-semibold hover:bg-slate-800"
              >
                Explore Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
