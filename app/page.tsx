import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, TESTIMONIALS, GALLERY_ITEMS } from "@/data/content";
import { ArrowRight, Star, ShieldCheck, Camera, Sparkles } from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 3);
  const highlightGallery = GALLERY_ITEMS.slice(0, 6);
  const youtubeVideos = [
    "https://www.youtube.com/embed/ZwQgd00A0vc?si=PgT_aNYgSI9L2J92",
    "https://www.youtube.com/embed/Z-ATU5dclaU?si=cjWMteGtzRxUVF_w",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sreeram Creations",
    image: "https://www.sreeramcreations.com/images/hero1.jpg",
    url: "https://www.sreeramcreations.com",
    telephone: "+91 9294053749",
    email: "sreeram.creations19@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "South India",
      addressCountry: "IN",
    },
    serviceType: [
      "Luxury Wedding Photography",
      "Wedding Cinematography",
      "Pre-Wedding Photography",
      "Destination Wedding Photography",
      "Corporate Event Photography",
    ],
    description:
      "Luxury wedding photography, pre-wedding editorials and cinematography studio based in South India.",
  };

  return (
    <div className="space-y-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <HeroSlideshow />

      {/* Our Story / Legacy Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#735b24] font-semibold block">
              Legacy of Excellence
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-black leading-tight">
              Capturing the soul behind the lens.
            </h2>
            <p className="text-sm md:text-base text-[#4c4546] leading-relaxed font-light">
              At Sreeram Creations, we believe photography is more than just a click; it&apos;s a silent narrative of raw emotion, an artistic legacy that transcends time. Our visionaries craft every frame with meticulous precision, ensuring your most precious moments are immortalized in their truest, most luxurious form.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#735b24] text-[#735b24] hover:bg-[#735b24] hover:text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-[#eeeeee] overflow-hidden border border-[#eeeeee]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSTaCeRrkqEJCRxwwAa7MK5GZnfGyuLeC5HFs6O3sP-IUjVFd9PHadK41NfbjKNnnDNCDaYpvgKk3GAij6EvGfFs5Ue9k4ONtdfKl42iRPy-Om59lTsgbT8Z2Lxbzw77Lbm_oLCWYFHkgD1jasIexrAYmFmWrOs4STYFfGH4gcjba-1q5-q8eZ4NYyEl4pqvfL1FKbV-xpT3JhfauW1yXcRoXXJ2Q1t9YGtuOWUNWUqxj_ElEgXiB_5w"
                alt="Studio Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border-[10px] border-[#f9f9f9] shadow-xl hidden md:block overflow-hidden bg-black">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATDb1TmDg-LyNDfFECvRvLD8_DDlmjnfG1Gz4NRK-WTGBh3R0HKKKMEAYBvdhGGMKhK7nTJjuYtC_CzHeP1kLkWapRk5eYKYNAc2J_E7ABpbMzoDBXm8ZS9joamm5SpjjjijQRGm3-5R_8x0fYTyq7koLjfJRjsljy47fSbUNxku4inXCZPJLkvscalF7140ep2jAx_NwOIej0IlqA8FGq9d1yGfDO4uimdvd0CWs6LYrasI8CGcgEuQ"
                alt="Lens Craft Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Offerings */}
      <section className="bg-[#ffffff] py-20 border-y border-[#eeeeee]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#735b24] font-semibold">
              Exclusivity & Distinction
            </span>
            <h2 className="font-serif text-4xl text-black">
              Signature Collections
            </h2>
            <p className="text-xs text-[#4c4546] leading-relaxed">
              Tailored visual services designed for couples, luxury brands, and high-profile celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center pt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-black text-white hover:bg-[#735b24] px-9 py-4 text-xs uppercase tracking-[0.15em] font-semibold transition-colors duration-300"
            >
              <span>Explore All 5 Specialties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlighted Fine Art Gallery */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#eeeeee] pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#735b24] font-semibold block mb-2">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-4xl text-black">
              Artistic Legacy Showcase
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-black hover:text-[#C8A96A] transition-colors"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightGallery.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] bg-[#eeeeee] overflow-hidden border border-[#eeeeee]"
            >
              <img
                src={item.image}
                alt={item.title ?? item.category}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-white font-medium">
                  {item.title ?? item.category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials & Praise */}
      <section className="bg-[#1a1c1c] text-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A] font-semibold">
              Client Testimonials
            </span>
            <h2 className="font-serif text-4xl text-white">
              Words of Distinction
            </h2>
          </div>

          <div className="px-2">
            <TestimonialsCarousel testimonials={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* YouTube Gallery */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-serif text-5xl text-black">
              Timeless Celebrations — Our Video Gallery
            </h2>
            <p className="text-sm text-[#4c4546] leading-relaxed max-w-2xl mx-auto">
              From weddings and events to unforgettable milestones, our films preserve the emotions and moments that make every story truly personal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {youtubeVideos.map((videoUrl, index) => (
              <div key={index} className="overflow-hidden rounded-3xl shadow-2xl border border-[#e8e8e8] bg-black">
                <div className="relative aspect-[16/9] bg-black">
                  <iframe
                    title={`YouTube video ${index + 1}`}
                    src={videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Booking Banner */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="bg-[#ffffff] border border-[#eeeeee] p-12 md:p-20 text-center space-y-6 shadow-sm">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#735b24] font-semibold">
            <Sparkles className="w-4 h-4" /> Reserve Your Dates
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-black">
            Begin Your Legacy Story Today
          </h2>
          <p className="text-xs md:text-sm text-[#4c4546] max-w-xl mx-auto leading-relaxed">
            We limit our annual bookings to maintain maximum artistic focus and exclusivity for each client.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C8A96A] hover:bg-[#B59556] text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 shadow-md"
            >
              <span>Schedule Concierge Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
