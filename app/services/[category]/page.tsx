import type { Metadata } from "next";
import { SERVICES } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const service = SERVICES.find((s) => s.slug === category);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${service.title} | Sreeram Creations`,
    description: `${service.tagline} ${service.description}`,
    keywords: [
      service.title,
      "Luxury Wedding Photography",
      "Wedding Cinematography",
      "Sreeram Creations",
      "Destination Wedding Photography",
    ],
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    category: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { category } = await params;
  const service = SERVICES.find((s) => s.slug === category);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-20 pb-20">
      {/* Back button header navigation */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#735b24] hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#735b24] font-semibold block">
              Specialized Collection
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-black leading-tight">
              {service.title}
            </h1>
            <p className="text-sm md:text-base text-[#4c4546] font-light leading-relaxed">
              {service.tagline}
            </p>
            <p className="text-xs text-[#7e7576] leading-relaxed">
              {service.description}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C8A96A] hover:bg-[#B59556] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all"
              >
                <span>Book This Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="aspect-[4/3] bg-[#eeeeee] overflow-hidden border border-[#eeeeee] shadow-lg">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Signature Features */}
      <section className="bg-[#ffffff] py-16 border-y border-[#eeeeee]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#735b24] font-semibold">
              Collection Highlights
            </span>
            <h2 className="font-serif text-3xl text-black">What is Included</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#f9f9f9] border border-[#eeeeee] flex items-start gap-4"
              >
                <CheckCircle2 className="w-5 h-5 text-[#735b24] shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-[#1a1c1c] font-medium leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-8">
        <div className="border-b border-[#eeeeee] pb-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#735b24] font-semibold block mb-1">
            Visual Gallery
          </span>
          <h2 className="font-serif text-3xl text-black">Featured Artworks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.gallery.map((imgUrl, idx) => (
            <div
              key={idx}
              className="aspect-[4/3] bg-[#eeeeee] overflow-hidden border border-[#eeeeee]"
            >
              <img
                src={imgUrl}
                alt={`${service.title} sample ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Process Steps */}
      <section className="bg-[#1a1c1c] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A] font-semibold">
              The Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Our 3-Step Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="bg-black/40 border border-white/10 p-8 space-y-4 relative"
              >
                <span className="font-serif text-4xl text-[#C8A96A] opacity-60 block">
                  {p.step}
                </span>
                <h3 className="font-serif text-xl text-white">{p.title}</h3>
                <p className="text-xs text-[#cfc4c5] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
