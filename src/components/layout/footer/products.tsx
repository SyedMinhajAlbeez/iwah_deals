"use client";

import React from 'react';
import Image from 'next/image';

// Product type definition
interface Product {
  id: string;
  imageUrl: string;
  name: string; // Keeping name for alt text
}

// Shortened mock products with only essential data
const mockProducts: Product[] = [
  {
    id: "c1",
    name: "BLACK CASUAL BLAZER",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
  },
  {
    id: "c2",
    name: "BLUE DENIM JACKET",
    imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop",
  },
  {
    id: "n1",
    name: "BEIGE LINEN BLAZER",
    imageUrl: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=500&auto=format&fit=crop",
  },
  {
    id: "s1",
    name: "NAVY BLAZER",
    imageUrl: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=500&auto=format&fit=crop",
  },
];

// Product Card Component - Now only shows image
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg bg-white">
      <div className="relative aspect-[3/4] bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {/* All badges and tags removed */}
      </div>
      {/* All product details div removed */}
    </div>
  );
};

// Main Page Component
export default function Products() {
  return (
    <div className="bg-white">
      <div className="container mt-8 mx-auto px-4 max-w-screen-2xl">
        <div className="mb-8">
          {/* <h2 className="text-xl text-center md:text-3xl font-semibold text-gray-900 mb-2">
            Today’s Top Picks
          </h2> */}
        </div>
        {/* Product Grid - Only Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}