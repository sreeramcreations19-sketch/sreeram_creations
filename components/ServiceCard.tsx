import Link from "next/link";
import { ServiceDetail } from "@/data/content";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceDetail;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-[#ffffff] border border-[#eeeeee] overflow-hidden service-card flex flex-col h-full">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eeeeee]">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow justify-between border-t border-[#eeeeee]">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#735b24] font-semibold block mb-2">
            Signature Offering
          </span>
          <h3 className="font-serif text-2xl text-black mb-3 group-hover:text-[#735b24] transition-colors">
            {service.title}
          </h3>
          <p className="text-xs text-[#4c4546] leading-relaxed mb-6">
            {service.subtitle}
          </p>
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-black hover:text-[#C8A96A] transition-colors pt-4 border-t border-[#eeeeee]"
        >
          <span>Discover Collection</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
