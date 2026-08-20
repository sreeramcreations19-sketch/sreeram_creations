import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/data/content";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Wedding Photography Services | Sreeram Creations",
  description:
    "Explore premium wedding photography services including pre-wedding shoots, destination wedding coverage, traditional wedding storytelling, maternity fine art, and corporate event photography.",
  keywords: [
    "Luxury Wedding Photography Services",
    "Pre-Wedding Photography",
    "Destination Wedding Photographer",
    "Traditional Wedding Photography",
    "Maternity Fine Art",
    "Corporate Event Photography",
  ],
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-[#1a1c1c] text-white py-24 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A] font-semibold">
            Visual Story Telling
          </span>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight">
            Our Services
          </h1>
          <p className="text-xs md:text-sm text-[#cfc4c5] font-light leading-relaxed max-w-xl mx-auto uppercase tracking-[0.15em] pt-2">
            Every moment tells a story,We’re here to capture yours,through our vision and lens.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Custom Commissions Notice */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="bg-[#ffffff] border border-[#eeeeee] p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-sm">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#735b24] font-semibold inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Bespoke Commissions
            </span>
            <h2 className="font-serif text-3xl text-black">
              Need a Custom International Itinerary?
            </h2>
            <p className="text-xs text-[#4c4546] leading-relaxed">
              We frequently travel across Europe, Asia, and North America for multi-destination celebrations, private yacht shoots, and exclusive brand unveilings.
            </p>
          </div>
          <div className="space-y-3 bg-[#f9f9f9] p-8 border border-[#eeeeee]">
            <h4 className="font-serif text-lg text-black mb-2">Included in Every Luxury Tier:</h4>
            <ul className="space-y-2 text-xs text-[#4c4546]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#735b24]" />
                <span>Dedicated Principal Photographer & Creative Director</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#735b24]" />
                <span>Private Online Gallery Vault with Unlimited High-Res Downloads</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#735b24]" />
                <span>Museum-Grade Italian Leather Album with Custom Monogramming</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block w-full text-center bg-[#C8A96A] hover:bg-[#B59556] text-white py-3 text-xs uppercase tracking-[0.15em] font-semibold transition-colors"
              >
                Inquire For Custom Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
