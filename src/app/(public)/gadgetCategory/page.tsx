
"use client"

// productPage/index.tsx
import React from 'react';
import Banner from "./banner"
import ProductListing from "./ProductListing"
import FeaturedCollections from "./FeaturedCollections"
import LimitedTime from "./limitedTime"

import PartnerWithSection from "@components/layout/footer/PartnerWithSection";
import ReviewsCarousel from "@components/layout/footer/ReviewsCarousel";
import Products from "@components/layout/footer/products";

export default function Category() {

  return (
    <div className="min-h-screen bg-white">
      <Banner/>
      {/* <ProductPage/>*/}
      
      <FeaturedCollections /> 
      
      <ProductListing/>
      <LimitedTime/>
      <ReviewsCarousel />
      <PartnerWithSection />
      <div style={{ textAlign: "center", marginBottom: "48px" , marginTop: "48px"}}>
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
          Shop Instagram
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
          Elevate your wardrobe with fresh finds today!
        </p>
      </div>
      <Products />
    </div>
  );
}