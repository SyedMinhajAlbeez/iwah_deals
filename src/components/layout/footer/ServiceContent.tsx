"use client";

import { FC, useState, useRef } from "react";
import Image from "next/image";
import { OptionDataTypes } from "@/types/types";
import { ThemeCustomizationTranslationNode } from "@/types/theme/theme-customization";
import { safeParse } from "@utils/helper";

export interface ServiceContentDataTypes {
  name?: string;
  serviceData?: ThemeCustomizationTranslationNode[];
}

export interface ServiceContenRenderTypes {
  serviceList?: {
    options?: OptionDataTypes;
  };
}

// ─── Review Data ───────────────────────────────────────────────────────────────

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    rating: 5,
    text: "My first order arrived today in perfect condition Such great service. I look forward to shopping on your site in the future and would highly recommend it.",
    image: "/image/sliderImages/westernCollection1.png",
  },
  {
    id: 2,
    name: "Muhammad Ali",
    rating: 3,
    text: "My first order arrived today in perfect condition Such great service. I look forward to shopping on your site in the future and would highly recommend it.",
    image: "/image/sliderImages/westernCollection2.png",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    rating: 4,
    text: "My first order arrived today in perfect condition Such great service. I look forward to shopping on your site in the future and would highly recommend it.",
    image: "/image/sliderImages/westernCollection3.png",
  },
  {
    id: 4,
    name: "Zara Malik",
    rating: 5,
    text: "My first order arrived today in perfect condition Such great service. I look forward to shopping on your site in the future and would highly recommend it.",
    image: "/image/sliderImages/arabicCollection4.png",
  },
];

// ─── Star Rating ───────────────────────────────────────────────────────────────

const StarRating: FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={i < rating ? "#F5A623" : "none"}
        stroke={i < rating ? "#F5A623" : "#555"}
        strokeWidth="1.5"
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
);

// ─── Leave Us A Review Button ──────────────────────────────────────────────────

const LeaveReviewButton: FC = () => (
  <button
    style={{
      border: "linear-gradient(90deg, #034680 0%, #089BC7 100%)",
      padding: "9px 17px",
      borderRadius: "999px",
      // border: "none",
      cursor: "pointer",
    }}
  >
    <span
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "100%",
        letterSpacing: "0px",
        color: "#ffffff",
        whiteSpace: "nowrap",
      }}
    >
      Leave Us A Review
    </span>
  </button>
);

// ─── Review Card ───────────────────────────────────────────────────────────────

interface ReviewCardProps {
  review: Review;
  isActive: boolean;
}

const ReviewCard: FC<ReviewCardProps> = ({ review, isActive }) => {
  return (
    <div
      style={{
        minWidth: "680px",
        height: "243px",
        borderRadius: "16px",
        border: isActive ? "1.5px solid #C97B2A" : "1.5px solid #2a2a2a",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        flexShrink: 0,
        transition: "border-color 0.4s ease",
      }}
    >
      <div style={{minWidth: "150px",height: "243px",position: "relative",marginLeft: "24px",flexShrink: 0,}}>
        <Image
          src={review.image}
          alt={review.name}
          fill
          style={{objectFit: "cover",borderRadius: "26px",background: "#ffffff",opacity: 1,padding: "12px 12px 12px 12px",}}
          sizes="200px"
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "24px 28px 24px 32px",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "1.2",
            }}
          >
            {review.name}
          </span>
          <LeaveReviewButton />
        </div>

        <StarRating rating={review.rating} />

        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "1.6",
            color: "#aaaaaa",
            margin: 0,
            maxWidth: "502px",
          }}
        >
          {review.text}
        </p>
      </div>
    </div>
  );
};

// ─── Reviews Carousel ──────────────────────────────────────────────────────────

const ReviewsCarousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 640;
  const GAP = 24;
  const PEEK = 120;

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const translateX = -(activeIndex * (CARD_WIDTH + GAP)) + PEEK;

  return (
    <section
  style={{
    width: "60%",
    margin: "0 auto",  // This centers the element horizontally
    paddingTop: "60px",
    paddingBottom: "60px",
    fontFamily: "Poppins, sans-serif",
    overflow: "hidden",
  }}
>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "1",
            color: "#000000",
            margin: "0 0 12px 0",
          }}
        >
          Customer Reviews
        </h2>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#666666",
            margin: 0,
          }}
        >
          Our Customers Adore Our Product See what our customer say!
        </p>
      </div>

      <div
        style={{
          overflow: "hidden",
          width: "100%",
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: `${GAP}px`,
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
            paddingLeft: "0px",
          }}
        >
          {REVIEWS.map((review, index) => (
            <div
              key={review.id}
              onClick={() => goTo(index)}
              style={{ cursor: index !== activeIndex ? "pointer" : "default" }}
            >
              <ReviewCard review={review} isActive={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "24px",
        }}
      >
        {REVIEWS.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            style={{
              width: index === activeIndex ? "14px" : "10px",
              height: index === activeIndex ? "14px" : "10px",
              borderRadius: "50%",
              background: index === activeIndex ? "#F5A623" : "transparent",
              border: index === activeIndex ? "none" : "1.5px solid #555555",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
};

// ─── Benefits Section ──────────────────────────────────────────────────────────

const BenefitsSection: FC = () => {
  const benefits = [
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

  return (
    <section
      style={{
        // background: "#0A9ACC",           // now visible
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
            {/* Blue circle with centered icon */}
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
                style={{
                  objectFit: "contain",
                }}
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

      {/* Visible purple bottom line */}
      <div
        style={{
          height: "2px",
          // background: "#7C3AED",          // purple/violet as in reference
          maxWidth: "1000px",
          margin: "30px auto 0",
        }}
      />
    </section>
  );
};

// ─── Service Content ──────────────────────────────────────────────────────────

const ServiceContent: FC<ServiceContentDataTypes> = ({ serviceData }) => {
  // For quick debug: force render regardless of serviceData
  // return <ServiceCarouselRender />;

  if (!serviceData?.length) {
    return <ServiceCarouselRender />;
  }

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
  const partners = Array.from({ length: 7 }, (_, idx) => ({
    src: `/image/partners/partner${idx + 1}.png`,
    alt: `Partner ${idx + 1}`,
  }));


  return (
    <div className="bg-white">
      <section className="w-full rounded-2xl px-6">
        <h2 className="mx-auto flex h-[60px] w-[248px] items-center justify-center text-center font-['Poppins'] text-[40px] font-semibold leading-[40px] text-gray-900">
          Partner with
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
      {/* <section className="w-full rounded-2xl px-6">
  <h2 className="mx-auto flex h-[60px] w-[248px] items-center justify-center text-center font-['Poppins'] text-[40px] font-semibold leading-[40px] text-gray-900">
    Partner with
  </h2>
  <div className="mt-8 flex flex-wrap justify-between items-center grayscale hover:grayscale-0">
    {partners.map((partner) => (
      <Image
        key={partner.src}
        src={partner.src}
        alt={partner.alt}
        width={153}
        height={79}
        className="h-[79px] w-[calc(14.285%-10px)] object-contain grayscale hover:grayscale-0"
        loading="lazy"
      />
    ))}
  </div>
</section> */}

      <ReviewsCarousel />

      <BenefitsSection />
    </div>
  );
};

export default ServiceContent;
