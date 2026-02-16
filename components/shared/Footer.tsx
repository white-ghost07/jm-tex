import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          {/* Left: Office info */}
          <div className="max-w-md">
            <p className="text-xl font-semibold text-gray-900">
              Corporate Office:
            </p>

            <div className="mt-5 space-y-2 text-[18px] leading-[1.9] text-gray-700">
              <p>Interloop Limited</p>
              <p>1 KM, Khurrianwala-Jaranwala Road,</p>
              <p>Khurrianwala, Faisalabad, Pakistan</p>
            </div>

            <div className="mt-4 space-y-0 text-[18px] leading-[1.9] text-gray-700">
              <p>Phone: +92 41 4360400</p>
              <p>Fax: +92 41 2428704</p>
            </div>
          </div>

          {/* Middle: Links */}
          <nav className="md:pt-1">
            <ul className="space-y-3 text-[18px] text-gray-800">
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/customers" className="hover:text-gray-900">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-gray-900">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-gray-900">
                  Sitemap
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Social + copyright */}
          <div className="md:text-right">
            <div className="flex items-center gap-3 md:justify-end">
              <SocialIcon href="#" label="YouTube">
                <Facebook className="text-[14px]" />
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <Linkedin className="text-[14px]" />
              </SocialIcon>
            </div>

            <div className="mt-6 space-y-1 text-[16px] leading-[1.9] text-gray-700">
              <p>© 2025 Interloop Limited</p>
              <p>Last Updated: 16 February, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition hover:opacity-80"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
