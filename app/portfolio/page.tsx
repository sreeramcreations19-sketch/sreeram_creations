import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Wedding Portfolio | Sreeram Creations",
  description:
    "Browse Sreeram Creations' luxury wedding portfolio featuring destination weddings, fine-art editorials, pre-wedding storytelling, and cinematic portraiture.",
  keywords: [
    "Wedding Portfolio",
    "Luxury Wedding Portfolio",
    "Pre-Wedding Gallery",
    "Fine Art Photography Portfolio",
    "Destination Wedding Photos",
  ],
};

export default function PortfolioPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Editorial Header */}
      <section className="bg-[#1a1c1c] text-white py-24 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A] font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" /> The Story Vault
          </span>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight">
            Portfolio Gallery
          </h1>
          <p className="text-xs md:text-sm text-[#cfc4c5] font-light leading-relaxed max-w-xl mx-auto uppercase tracking-[0.15em] pt-2">
            Discover our finest work and explore a collection of weddings, pre-weddings, maternity, birthdays, and life’s many celebrations.
          </p>
        </div>
      </section>

      {/* Main Filterable Gallery */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20">
        <GalleryGrid />
      </section>
    </div>
  );
}
