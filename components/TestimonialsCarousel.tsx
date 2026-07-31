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
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const onResize = () => {
      setVisible(window.innerWidth >= 768 ? 3 : 1);
      setIndex(0);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const n = testimonials.length;
  const maxIndex = Math.max(0, n - visible);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const trackWidth = `${(n * 100) / visible}%`;
  const translate = `-${(index * 100) / visible}%`;

  return (
    <div className="relative">
      {maxIndex > 0 && (
        <button
          aria-label="Previous testimonials"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full hover:bg-black/80"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
      )}

      {maxIndex > 0 && (
        <button
          aria-label="Next testimonials"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full hover:bg-black/80"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      )}

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ width: trackWidth, transform: `translateX(${translate})` }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 flex flex-col justify-between space-y-6"
              style={{ width: `${100 / visible}%`, boxSizing: "border-box" }}
            >
              <div className="space-y-4 bg-black/50 border border-white/10 h-full flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex text-[#C8A96A] gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8A96A]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#cfc4c5] leading-relaxed italic font-light">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10 p-6">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#C8A96A]"
                  />
                  <div>
                    <h4 className="font-serif text-sm text-white">{t.author}</h4>
                    <p className="text-[10px] uppercase tracking-wider text-[#C8A96A]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
