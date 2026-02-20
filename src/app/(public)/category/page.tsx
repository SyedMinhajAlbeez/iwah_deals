

"use client"

// productPage/index.tsx
import React from 'react';
import Banner from "./banner"
// import ProductPage from "./productPage"
import ProductListing from "./ProductListing"
import FeaturedCollections from "./FeaturedCollections"



export default function Category() {

  return (
    <div className="min-h-screen bg-white">
      <Banner/>
      {/* <ProductPage/> */}
      <ProductListing/>
      <FeaturedCollections />
    </div>
  );
}