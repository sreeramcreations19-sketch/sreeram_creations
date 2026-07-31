import type { Metadata } from "next";
import Link from "next/link";
import { SITE_METADATA } from "@/data/content";
import { ShieldCheck, Award, Eye, Camera, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Sreeram Creations | Luxury Wedding Photographer in South India",
  description:
    "Meet Sreeram Creations, a luxury wedding photography and cinematography studio in South India, known for elegant wedding storytelling, destination shoots, and fine-art visual memoirs.",
  keywords: [
    "About Sreeram Creations",
    "Wedding Photographer South India",
    "Luxury Wedding Studio",
    "Wedding Cinematography Team",
    "Wedding Storytelling",
  ],
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#1a1c1c] text-white py-24 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A] font-semibold">
            About Sreeram Creations
          </span>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight">
            Crafting Visual Legacies Since 2018
          </h1>
          <p className="text-xs md:text-sm text-[#cfc4c5] font-light leading-relaxed max-w-xl mx-auto uppercase tracking-[0.15em] pt-2">
            When Passion Becomes a Profession.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#735b24] font-semibold block">
              The Woman Behind the Vision
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-black leading-tight">
              A journey fueled by passion, purpose, and perseverance.
            </h2>
            <p className="text-xs md:text-sm text-[#4c4546] leading-relaxed">
              Hi, I'm <strong>Sindhu</strong>, a B.C.A. graduate from Andhra Pradesh and the founder of Sreeram Creations, with a deep passion for visual storytelling. My journey began in 2006 when I started learning Photoshop and designing albums for family and friends. What began as a simple creative interest gradually evolved into a lifelong passion for photography, photo editing, and cinematic filmmaking.
            </p>
            <p className="text-xs md:text-sm text-[#4c4546] leading-relaxed">
                 As life presented new challenges, that passion transformed into a fulfilling profession. I began working with small organizations, photo studios, charities, and temples, steadily building my experience and refining my craft. Since 2018, Sreeram Creations has proudly grown into a dedicated team specializing in wedding photography, event coverage, professional photo and video editing, and timeless story films—capturing memories that families will cherish for generations.
            </p>
          </div>

          <div className="aspect-[4/3] bg-[#eeeeee] overflow-hidden border border-[#eeeeee]">
            <img
              src="/images/s1.jpg"
              alt="Artistic Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section (replaces Pillars) */}
      <section className="bg-[#ffffff] py-20 border-y border-[#eeeeee]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#735b24] font-semibold">
              Meet The Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-black">
              Our Creative Collective
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center">
            <div className="overflow-hidden bg-[#f9f9f9] border border-[#eeeeee]">
              <img
                src="/images/s2.jpg"
                alt="Team member"
                className="w-full h-40 md:h-48 object-cover"
              />
            </div>

            <div className="overflow-hidden bg-[#f9f9f9] border border-[#eeeeee]">
              <img
                src="/images/s3.jpg"
                alt="Team member"
                className="w-full h-40 md:h-48 object-cover"
              />
            </div>

            <div className="overflow-hidden bg-[#f9f9f9] border border-[#eeeeee]">
              <img
                src="/images/s4.jpg"
                alt="Team member"
                className="w-full h-40 md:h-48 object-cover"
              />
            </div>

            <div className="overflow-hidden bg-[#f9f9f9] border border-[#eeeeee]">
              <img
                src="/images/s5.jpg"
                alt="Team member"
                className="w-full h-40 md:h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20 text-center">
        <div className="bg-[#1a1c1c] text-white p-12 md:p-16 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Ready to Plan Your Visual Legacy?
          </h2>
          <p className="text-xs text-[#cfc4c5] max-w-lg mx-auto leading-relaxed font-light">
            Connect with our principal creative director for dates, destination logistics, and customized collection quotes.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C8A96A] hover:bg-[#B59556] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all"
            >
              <span>Contact Studio Concierge</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
