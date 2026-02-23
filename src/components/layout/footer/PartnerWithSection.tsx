// components/service/PartnerWithSection.tsx
"use client";

import { FC } from "react";
import Image from "next/image";

export interface PartnerWithSectionProps {
  title?: string;
  partners?: Array<{
    src: string;
    alt: string;
  }>;
}

const DEFAULT_PARTNERS = Array.from({ length: 7 }, (_, idx) => ({
  src: `/image/partners/partner${idx + 1}.png`,
  alt: `Partner ${idx + 1}`,
}));

const PartnerWithSection: FC<PartnerWithSectionProps> = ({ 
  title = "Partner with",
  partners = DEFAULT_PARTNERS 
}) => {
  return (
    <section className="w-full rounded-2xl px-6">
      <h2 className="mx-auto flex h-[60px] w-[248px] items-center justify-center text-center font-['Poppins'] text-[40px] font-semibold leading-[40px] text-gray-900">
        {title}
      </h2>
      <div className="mt-8 flex flex-wrap grayscale hover:grayscale-0 items-center justify-center gap-6">
        {partners.map((partner) => (
          <Image
            key={partner.src}
            src={partner.src}
            alt={partner.alt}
            width={153}
            height={79}
            className="h-[79px] w-[153px] object-contain grayscale hover:grayscale-0"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnerWithSection;