// import { Facebook, Linkedin } from "lucide-react";
// import Link from "next/link";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#F9F9F9]">
//       <div className="mx-auto max-w-7xl px-6 py-20">
//         <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
//           {/* Left: Office info */}
//           <div className="max-w-md">
//             <p className="text-xl font-semibold text-gray-900">
//               Corporate Office:
//             </p>

//             <div className="mt-5 space-y-2 text-[18px] leading-[1.9] text-gray-700">
//               <p>Interloop Limited</p>
//               <p>1 KM, Khurrianwala-Jaranwala Road,</p>
//               <p>Khurrianwala, Faisalabad, Pakistan</p>
//             </div>

//             <div className="mt-4 space-y-0 text-[18px] leading-[1.9] text-gray-700">
//               <p>Phone: +92 41 4360400</p>
//               <p>Fax: +92 41 2428704</p>
//             </div>
//           </div>

//           {/* Middle: Links */}
//           <nav className="md:pt-1">
//             <ul className="space-y-3 text-[18px] text-gray-800">
//               <li>
//                 <Link href="/contact" className="hover:text-gray-900">
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="hover:text-gray-900">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/customers" className="hover:text-gray-900">
//                   Customers
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/certifications" className="hover:text-gray-900">
//                   Certifications
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/sitemap" className="hover:text-gray-900">
//                   Sitemap
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Right: Social + copyright */}
//           <div className="md:text-right">
//             <div className="flex items-center gap-3 md:justify-end">
//               <FaFacebook size={30} />
//               <FaLinkedin size={30} />
//             </div>

//             <div className="mt-6 space-y-1 text-[16px] leading-[1.9] text-gray-700">
//               <p>© 2025 Interloop Limited</p>
//               <p>Last Updated: 16 February, 2026</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function SocialIcon({
//   href,
//   label,
//   children,
// }: {
//   href: string;
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <a
//       href={href}
//       aria-label={label}
//       className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition hover:opacity-80"
//       target="_blank"
//       rel="noreferrer"
//     >
//       {children}
//     </a>
//   );
// }
"use client";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { allProducts } from "../static/product.data";
import { navLinks } from "./Navbar";

export default function Footer() {
  const [loading, setLoading] = useState(false);

  return (
    <footer className="bg-black/90 text-white  py-8 md:py-20 px-8 md:px-10 lg:px-16">
      <div className="flex flex-col max-w-7xl mx-auto lg:flex-row justify-between border-b border-gray-300  mb-8 px-6">
        <div className="w-full lg:w-2/3 mx-auto pb-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5  ">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl uppercase font-semibold mb-4 ">
                Headquarter
              </h3>
              <p className="text-base leading-relaxed  mb-2">
                House No. 04 (5th Floor), Road No. 12, <br /> Sector 04, Uttara
                Model Town, <br /> Dhaka, Bangladesh.
              </p>
              <p className="text-base mb-2">+880 1714-117393 </p>
              <p className="text-base mb-4">info@hunhsintextile.com</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl uppercase font-semibold mb-4">
                Quick Link
              </h3>
              <ul className="space-y-2 capitalize ">
                {navLinks.map((link, index) => (
                  <li key={index} className="capitalize">
                    <Link
                      className="hover:underline capitalize"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-2xl uppercase font-semibold mb-4">Product</h3>
              <ul className="space-y-2 ">
                {allProducts.map((el) => (
                  <li key={el.id} className="hover:underline">
                    <Link href={`/product/${el.id}`}>{el.hero.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:w-1/3 lg:pl-8 pb-5 lg:border-l border-gray-300 ">
          <h2 className="text-2xl uppercase font-bold mb-4 leading-tight">
            Consult Us
          </h2>
          <form className="flex flex-col space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="NAME*"
                required
                name="fullname"
                className="w-1/2 p-2 bg-transparent border border-white text-sm placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="E-MAIL*"
                required
                className="w-1/2 p-2 bg-transparent border border-white text-sm placeholder-gray-400"
              />
            </div>
            <div className="relative">
              <textarea
                rows={3}
                placeholder="MESSAGE*"
                name="message"
                required
                className="w-full p-2 bg-transparent border border-white text-sm placeholder-gray-400"
              />
              <button
                disabled={loading}
                type="submit"
                className="absolute cursor-pointer top-0 right-0 h-19.25 px-4 bg-white hover:bg-gray-200 text-black flex items-center justify-center"
              >
                →
              </button>
            </div>
          </form>

          <div className="mt-4 flex items-center lg:justify-start gap-4 text-white pr-6">
            <span className="font-bold text-2xl">Follow Us : </span>
            <Link
              href={"https://www.facebook.com/hunhsintextile"}
              target="_blank"
              className="p-1 bg-gray-800 border rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaFacebookF size={26} />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/hunhsintextile/"}
              target="_blank"
              className="p-1 bg-gray-800 border rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              {" "}
              <FaLinkedin size={26} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 max-w-7xl mx-auto px-6  text-sm md:text-base text-white">
        <p className="text-2xl font-semibold">
          Hun Hsin Textile Co., (BD) Ltd.
        </p>
        <p>Leading Exporter of Premium Nylon Yarns</p>
        <p></p>
        <div className="text-sm text-gray-200 mt-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            © Hun Hsin Textile Co., (BD) Ltd. All Rights Reserved. | Quality
            from Bangladesh. For the world.{" "}
          </p>
          <div className="flex space-x-4">
            <Link href="/about">About Us</Link>
            <span>/</span>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
