import Link from "next/link";
import { SITE_METADATA } from "@/data/content";
import { Camera, Mail, Phone, MapPin } from "lucide-react";

const FOOTER_SERVICES = [
  "Pre-Wedding & Wedding Photography",
  "Traditional Photography",
  "Traditional Videography",
  "Candid Photography",
  "Cinematic Wedding Films",
  "Candid Wedding Films",
  "Portrait Photography",
  "Drone Fly",
  "LED Wall Setup",
  "Maternity & Baby Photoshoots",
  "Premium Album Design & Printing",
  "Instagram Wedding Reels",
  "Cinematic Wedding Highlights",
  "Complimentary Frame",
  "Digital Wedding Invitations (E-Invitations)",
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1c1c] text-[#e2e2e2] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-3 lg:col-span-3">
            <h3 className="font-serif text-2xl text-white tracking-tight">
              Sreeram Creations
            </h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] font-semibold">
              {SITE_METADATA.tagline}
            </p>
            <p className="text-xs text-[#cfc4c5] leading-relaxed pt-1">
              Crafting beautiful photographs and cinematic films for weddings, families, and life’s most cherished celebrations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#cfc4c5]">
              <li>
                <Link href="/" className="hover:text-[#C8A96A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C8A96A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C8A96A] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#C8A96A] transition-colors">
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C8A96A] transition-colors">
                  Contact & Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Service List */}
          <div className="space-y-3 lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-4">
              Our Services
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs text-[#cfc4c5] items-start">
              {FOOTER_SERVICES.map((service) => (
                <li key={service} className="leading-snug hover:text-[#C8A96A] transition-colors">
                  {service.trim()}
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-4">
              Studio Concierge
            </h4>
            <ul className="space-y-3 text-xs text-[#cfc4c5]">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C8A96A] shrink-0" />
                <span>{SITE_METADATA.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8A96A] shrink-0" />
                <span>{SITE_METADATA.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A96A] shrink-0" />
                <span>{SITE_METADATA.email}</span>
              </li>
              <li className="pt-2">
                <a
                  href={SITE_METADATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#C8A96A] transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-[#C8A96A] group-hover:scale-110 shrink-0 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>{SITE_METADATA.instagram}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_METADATA.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#C8A96A] transition-colors group"
                >
                  <svg
                    className="w-4 h-4 text-[#C8A96A] group-hover:scale-110 shrink-0 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>{SITE_METADATA.youtube}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[10px] text-[#7e7576] gap-4">
          <p>© {new Date().getFullYear()} Sreeram Creations. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <div className="flex flex-wrap gap-4 uppercase tracking-widest text-[9px]">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Editorial License</span>
            </div>
            <img
              src="/images/logo-emblem-white.png"
              alt="Sreeram Creations Logo"
              className="w-10 h-10 object-contain opacity-90 hover:opacity-100 transition-opacity shrink-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
