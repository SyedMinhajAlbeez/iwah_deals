// components/service/BenefitsSection.tsx
"use client";

import { FC } from "react";
import Image from "next/image";

export interface Benefit {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

export interface BenefitsSectionProps {
  benefits?: Benefit[];
}

const DEFAULT_BENEFITS: Benefit[] = [
  {
    iconSrc: "/image/icons/bx_bx-support.png",
    iconAlt: "Product Support Icon",
    title: "Product Support",
    description: "Up to 3 years on-site warranty available for your peace of mind.",
  },
  {
    iconSrc: "/image/icons/Vectorrr.png",
    iconAlt: "Personal Account Icon",
    title: "Personal Account",
    description: "With big discounts, free delivery and a dedicated support specialist.",
  },
  {
    iconSrc: "/image/icons/Vector.png",
    iconAlt: "Amazing Savings Icon",
    title: "Amazing Savings",
    description: "Up to 70% off new Products, you can be sure of the best price.",
  },
];

const BenefitsSection: FC<BenefitsSectionProps> = ({ 
  benefits = DEFAULT_BENEFITS 
}) => {
  return (
    <section
      style={{
        padding: "40px 20px 30px",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px 60px",
        }}
      >
        {benefits.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "280px",
            }}
          >
            <div
              style={{
                width: "65px",
                height: "65px",
                background: "#0A9ACC",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                position: "relative",
              }}
            >
              <Image
                src={item.iconSrc}
                alt={item.iconAlt}
                width={26}
                height={26}
                style={{ objectFit: "contain" }}
                priority={false}
              />
            </div>

            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                color: "#000000",
                margin: "0 0 8px 0",
                lineHeight: "1.2",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "#000000",
                margin: 0,
                lineHeight: "1.45",
                maxWidth: "260px",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          height: "2px",
          maxWidth: "1000px",
          margin: "30px auto 0",
        }}
      />
    </section>
  );
};

export default BenefitsSection;