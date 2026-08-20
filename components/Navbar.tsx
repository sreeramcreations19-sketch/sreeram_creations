"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f9f9f9]/90 backdrop-blur-md border-b border-[#cfc4c5]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <img
            src="/images/logo-emblem-black.png"
            alt="Sreeram Creations Logo"
            className="w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 -mt-1 md:-mt-1.5"
          />
          <div className="flex flex-col justify-center">
            <span className="font-serif text-2xl md:text-3xl text-black tracking-tight group-hover:text-[#735b24] transition-colors duration-300 leading-none mb-1">
              Sreeram Creations
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7e7576] font-medium leading-none">
              Make Your Moments Magical
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.15em] font-semibold transition-colors duration-300 relative py-1 ${isActive
                    ? "text-black font-bold"
                    : "text-[#4c4546] hover:text-[#735b24]"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C8A96A]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8A96A] hover:bg-[#B59556] text-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 shadow-sm hover:shadow"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black hover:text-[#C8A96A] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f9f9] border-b border-[#cfc4c5]/40 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm uppercase tracking-[0.15em] py-2 border-b border-[#eeeeee] ${isActive
                    ? "text-black font-bold text-[#C8A96A]"
                    : "text-[#4c4546]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#C8A96A] text-white py-3 text-xs uppercase tracking-[0.15em] font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
