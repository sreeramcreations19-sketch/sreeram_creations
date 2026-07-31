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
  "Drone Coverage",
  "LED Wall Setup",
  "Maternity & Baby Photoshoots",
  "Premium Album Design & Printing",
  "Instagram Wedding Reels",
  "Cinematic Wedding Highlights",
  "Sparkle Frame Effects",
  "Digital Wedding Invitations (E-Invitations)",
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1c1c] text-[#e2e2e2] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="font-serif text-2xl text-white tracking-tight">
              Sreeram Creations
            </h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] font-semibold">
              {SITE_METADATA.tagline}
            </p>
            <p className="text-[11px] text-[#cfc4c5] leading-snug pt-1">
              Bespoke luxury wedding photography, high-fashion editorials, and aerial cinematography for high-profile clients worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#cfc4c5]">
              <li>
                <Link href="/" className="hover:text-[#C8A96A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C8A96A] transition-colors">
                  About Us & Philosophy
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
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.15em] text-white font-semibold mb-3">
              Our Services
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[11px] text-[#cfc4c5]">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-4">
              Studio Concierge
            </h4>
            <ul className="space-y-3 text-xs text-[#cfc4c5]">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C8A96A]" />
                <span>{SITE_METADATA.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8A96A]" />
                <span>{SITE_METADATA.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A96A]" />
                <span>{SITE_METADATA.email}</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <Camera className="w-4 h-4 text-[#C8A96A]" />
                <span className="text-white hover:text-[#C8A96A] cursor-pointer">
                  {SITE_METADATA.instagram}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[10px] text-[#7e7576] gap-3">
          <p>© {new Date().getFullYear()} Sreeram Creations. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 uppercase tracking-widest text-[9px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Editorial License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
