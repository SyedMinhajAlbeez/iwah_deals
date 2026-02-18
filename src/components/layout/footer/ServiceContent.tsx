"use client";

import { FC } from "react";
import Image from "next/image";
import { OptionDataTypes } from "@/types/types";
import { ThemeCustomizationTranslationNode } from "@/types/theme/theme-customization";
import { usePathname } from "next/navigation";
import { safeParse } from "@utils/helper";

export interface ServiceContentDataTypes {
  name?: string;
  serviceData: ThemeCustomizationTranslationNode[];
}

export interface ServiceContenRenderTypes {
  serviceList: {
    options: OptionDataTypes;
  };
}

const ServiceContent: FC<ServiceContentDataTypes> = ({ serviceData }) => {
  return serviceData?.slice(0, 1)?.map((service, index: number) => {
    const options =
      typeof service.options === "string"
        ? safeParse(service.options)
        : service.options;

    return <ServiceCarouselRender key={index} serviceList={{ options }} />;
  });
};

const ServiceCarouselRender: FC<ServiceContenRenderTypes> = ({
  serviceList: _serviceList,
}) => {
  const pathname = usePathname();

  // Don't render service content on customer auth pages
  if (
    pathname === "/customer/login" ||
    pathname === "/customer/register" ||
    pathname === "/customer/forget-password"
  ) {
    return null;
  }

  const partners = Array.from({ length: 7 }, (_, idx) => ({
    src: `/image/partners/partner${idx + 1}.png`,
    alt: `Partner ${idx + 1}`,
  }));

  return (
    <section className="w-full rounded-2xl bg-[#202020] px-6 py-10">
      <h2 className="mx-auto flex h-[60px] w-[248px] items-center justify-center text-center font-['Poppins'] text-[40px] font-semibold leading-[40px] text-white">
        Partner with
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        {partners.map((partner) => (
          <Image
            key={partner.src}
            src={partner.src}
            alt={partner.alt}
            width={153}
            height={79}
            className="h-[79px] w-[153px] object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceContent;
