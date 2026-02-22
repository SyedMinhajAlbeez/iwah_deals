

"use client"

// productPage/index.tsx
import React from 'react';
import Banner from "./banner"
// import ProductListing from "./productListing"
import FeaturedCollections from "./FeaturedCollections"



export default function Category() {

  return (
    <div className="min-h-screen bg-white">
      <Banner/>
      {/* <ProductPage/>
      <ProductListing/>*/}
      <FeaturedCollections /> 
    </div>
  );
}