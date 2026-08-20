"use client";

import { useState } from "react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/content";
import { X, Maximize2, Sparkles } from "lucide-react";

const CATEGORIES = [
  "All",
  "Pre-Wedding",
  "Traditional",
  "Maternity & Baby Photography",
  "Interior",
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => {
          const target = activeCategory.trim().toLowerCase();
          const itemCat = item.category.trim().toLowerCase();
          if (itemCat === target) return true;
          if (target.includes("maternity") && itemCat.includes("maternity")) return true;
          if (target.includes("traditional") && itemCat.includes("traditional")) return true;
          if (target.includes("pre-wedding") && itemCat.includes("pre-wedding")) return true;
          if (target.includes("interior") && itemCat.includes("interior")) return true;
          return false;
        });

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
  };

  return (
    <div className="w-full space-y-10">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-b border-[#eeeeee] pb-6">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory.trim().toLowerCase() === cat.trim().toLowerCase();
          return (
            <button
              key={cat}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCategoryClick(cat);
              }}
              className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-semibold cursor-pointer select-none transition-all duration-200 active:scale-95 ${
                isActive
                  ? "bg-[#000000] text-white shadow-md border border-black"
                  : "bg-[#ffffff] text-[#4c4546] hover:bg-[#eeeeee] border border-[#eeeeee] hover:text-black"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of gallery cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative bg-[#ffffff] border border-[#eeeeee] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-500"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eeeeee]">
              <img
                src={item.image}
                alt={item.title ?? item.category}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A96A] font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl text-white font-medium mb-1">
                  {item.title ?? item.category}
                </h4>
                <div className="flex items-center gap-2 text-white/80 text-xs mt-2">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Full Art</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in">
          <div className="relative max-w-5xl w-full bg-[#1a1c1c] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            {/* Image Preview */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title ?? selectedItem.category}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>

            {/* Sidebar info */}
            <div className="w-full md:w-96 p-8 flex flex-col justify-between text-white border-t md:border-t-0 md:border-l border-white/10 bg-[#1a1c1c]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] font-semibold border border-[#C8A96A]/40 px-3 py-1">
                    <Sparkles className="w-3 h-3" />
                    {selectedItem.category}
                  </span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-1 text-white/70 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <h3 className="font-serif text-3xl mb-4 text-white">
                  {selectedItem.title ?? selectedItem.category}
                </h3>

                <p className="text-xs text-[#cfc4c5] leading-relaxed mb-6 font-light">
                  {selectedItem.description ?? "A curated selection from the Sreeram Creations portfolio."}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-[#7e7576]">
                  <p>
                    <strong className="text-white font-medium">Studio:</strong> Sreeram Creations
                  </p>
                  <p>
                    <strong className="text-white font-medium">Format:</strong> Medium Format Digital Fine Art
                  </p>
                  <p>
                    <strong className="text-white font-medium">Color Grade:</strong> Editorial Fidelity
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full bg-[#C8A96A] hover:bg-[#B59556] text-white py-3 text-xs uppercase tracking-[0.15em] font-semibold transition-colors"
                >
                  Close Artwork
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
