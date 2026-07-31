"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Reel = {
  url: string;
  label: string;
};

function getEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (parts[0] === "reel" && parts[1]) {
      return `https://www.instagram.com/reel/${parts[1]}/embed/?cr=1&hl=en&omitscript=1`;
    }
  } catch (error) {
    // ignore invalid URL
  }
  return url;
}

export default function InstagramReelSlider({ reels }: { reels: Reel[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const onResize = () => {
      setVisible(1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = Math.max(0, reels.length - visible);

  const prev = () => setActiveIndex((current) => Math.max(0, current - 1));
  const next = () => setActiveIndex((current) => Math.min(maxIndex, current + 1));

  const sliderWidth = `${reels.length * 100}%`;
  const translate = `-${activeIndex * 100}%`;

  return (
    <div className="relative max-w-[450px] mx-auto">
      {maxIndex > 0 && (
        <button
          onClick={prev}
          aria-label="Previous reel"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full hover:bg-black/90"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
      )}

      {maxIndex > 0 && (
        <button
          onClick={next}
          aria-label="Next reel"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full hover:bg-black/90"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      )}

      <div className="overflow-hidden rounded-[32px] border-2 border-white/20 shadow-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ width: sliderWidth, transform: `translateX(${translate})` }}
        >
          {reels.map((reel, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group flex-shrink-0 transition duration-300 ${
                idx === activeIndex ? "bg-white/5" : "bg-black/20 hover:bg-white/10"
              }`}
              style={{ width: "100%", boxSizing: "border-box" }}
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-[#111]">
                {idx === activeIndex ? (
                  <iframe
                    title={`Instagram Reel ${idx + 1}`}
                    src={getEmbedUrl(reel.url)}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xs uppercase tracking-[0.22em] font-semibold px-3 text-center">
                      Tap to play reel
                    </div>
                  </>
                )}
              </div>
              <div className="p-3 text-sm text-white/80 leading-tight">
                {reel.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
