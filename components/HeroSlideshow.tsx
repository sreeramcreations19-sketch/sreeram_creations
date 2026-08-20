"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HERO_SLIDES } from "@/data/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative h-[85vh] md:h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Slideshow background layers */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`hero-slideshow-item ${
            idx === currentIndex ? "active" : ""
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={idx === 0 ? "high" : "auto"}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Dark gradient overlay for luxury contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />

      {/* Center Hero Typography */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-[0.4em] text-[#C8A96A] font-semibold mb-4 animate-fade-in">
          {HERO_SLIDES[currentIndex].subtitle}
        </span>

        <h1 className="font-serif text-5xl md:text-8xl tracking-tight text-white mb-6 drop-shadow-lg leading-tight transition-all duration-700">
          {HERO_SLIDES[currentIndex].title}
        </h1>

        <p className="text-xs md:text-sm text-white/80 max-w-xl font-light uppercase tracking-[0.2em] mb-10">
          {HERO_SLIDES[currentIndex].caption}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/portfolio"
            className="bg-[#C8A96A] hover:bg-[#B59556] text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg text-center"
          >
            Explore Portfolio
          </Link>
          <Link
            href="/contact"
            className="border border-white/60 hover:border-white text-white hover:bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 text-center"
          >
            Request Private Consultation
          </Link>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white p-3 rounded-full bg-black/30 hover:bg-black/60 transition-all border border-white/20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white p-3 rounded-full bg-black/30 hover:bg-black/60 transition-all border border-white/20"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all duration-500 ${
              idx === currentIndex
                ? "w-8 bg-[#C8A96A]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
