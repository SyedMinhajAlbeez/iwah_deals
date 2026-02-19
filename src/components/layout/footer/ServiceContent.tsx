"use client";

import { FC, useState, useRef } from "react";
import Image from "next/image";
import { OptionDataTypes } from "@/types/types";
import { ThemeCustomizationTranslationNode } from "@/types/theme/theme-customization";
import { usePathname } from "next/navigation";
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
      background: "linear-gradient(90deg, #034680 0%, #089BC7 100%)",
      padding: "9px 17px",
      borderRadius: "999px",
      border: "none",
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
        // background: "#0d0d0d",           // keep dark background (matches most references)
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",              // ← important: image stays inside
        flexShrink: 0,
        transition: "border-color 0.4s ease",
      }}
    >
      {/* Image container — full height, centered vertically */}
      <div
        style={{
          width: "200px",
          minWidth: "200px",
          height: "243px",
          position: "relative",
          marginLeft: "24px",            // left gap like many examples
          flexShrink: 0,
        }}
      >
        <Image
          src={review.image}
          alt={review.name}
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",    // centers the full outfit
            borderRadius: "26px",
            background: "#ffffff",       // white bg behind dress
            opacity: 1,
          }}
          sizes="200px"
        />
      </div>

      {/* Content Area */}
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
              // color: "#ffffff",            // white for dark bg
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
        width: "100%",
        paddingTop: "60px",
        paddingBottom: "60px",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
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

// ─── Service Content ──────────────────────────────────────────────────────────

const ServiceContent: FC<ServiceContentDataTypes> = ({ serviceData }) => {
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
  const pathname = usePathname();

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
    <div className="flex flex-col gap-10">
      <section className="w-full rounded-2xl px-6 py-10">
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

      <ReviewsCarousel />
    </div>
  );
};

export default ServiceContent;