"use client";

import React, { useEffect, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  avatar?: string;
  role?: string;
};

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const onResize = () => {
      const isDesktop = window.innerWidth >= 768;
      const newVisible = isDesktop ? 3 : 1;
      setVisible(newVisible);
      setIndex((prev) => Math.min(prev, Math.max(0, testimonials.length - newVisible)));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [testimonials.length]);

  const n = testimonials.length;
  const maxIndex = Math.max(0, n - visible);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // Minimum swipe distance in px
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && index < maxIndex) {
      next();
    } else if (isRightSwipe && index > 0) {
      prev();
    }
  };

  const trackWidth = `${(n * 100) / visible}%`;
  const translate = `-${(index * 100) / visible}%`;

  return (
    <div className="relative px-2 md:px-8">
      {/* Navigation Arrows */}
      {maxIndex > 0 && (
        <>
          <button
            aria-label="Previous testimonials"
            onClick={prev}
            disabled={index === 0}
            className={`absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/80 text-white border border-white/20 shadow-lg transition-all duration-300 ${
              index === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-80 hover:opacity-100 hover:bg-[#C8A96A]"
            }`}
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button
            aria-label="Next testimonials"
            onClick={next}
            disabled={index >= maxIndex}
            className={`absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/80 text-white border border-white/20 shadow-lg transition-all duration-300 ${
              index >= maxIndex
                ? "opacity-30 cursor-not-allowed"
                : "opacity-80 hover:opacity-100 hover:bg-[#C8A96A]"
            }`}
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </>
      )}

      {/* Carousel Track Container */}
      <div
        className="overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ width: trackWidth, transform: `translateX(${translate})` }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-3 md:p-4 flex flex-col justify-between"
              style={{ width: `${100 / visible}%`, boxSizing: "border-box" }}
            >
              <div className="space-y-4 bg-black/60 border border-white/10 rounded-2xl h-full flex flex-col justify-between p-6 md:p-8 backdrop-blur-sm">
                <div className="space-y-3">
                  <div className="flex text-[#C8A96A] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C8A96A]" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-[#cfc4c5] leading-relaxed italic font-light">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#C8A96A]"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#C8A96A] text-white flex items-center justify-center font-bold text-xs shrink-0 border border-[#C8A96A]">
                      {t.author.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h4 className="font-serif text-sm text-white font-medium">{t.author}</h4>
                    {t.role && (
                      <p className="text-[10px] uppercase tracking-wider text-[#C8A96A]">
                        {t.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      {maxIndex > 0 && (
        <div className="flex justify-center items-center gap-2 pt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === index ? "w-6 bg-[#C8A96A]" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
