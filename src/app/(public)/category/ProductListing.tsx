"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Product type definition
export interface Product {
  id: string;
  color: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  imageUrl: string;
  category: string;
  rating: number;
  reviews: number;
  reviewCount: number;
  badge?: 'New Arrival' | 'Best Seller' | 'Trending' | 'Sale';
  catalog: string;
  catalogNumber: string;
}

interface ProductsPageProps {
  products?: Product[];
}

// Product Card Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const discount = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

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
        {product.badge && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded z-10">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
            -{discount}%
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold mb-1 uppercase">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.color}</p>
        <div className="mb-2">
          <span className="text-lg font-bold text-gray-900 mr-2">
            BHD{product.price.toFixed(2)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              BHD{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="text-sm text-yellow-500 mb-2">
          <span>{'★'.repeat(product.rating)}</span>
          <span className="text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-xs text-gray-500">{product.catalog}</p>
      </div>
    </div>
  );
};

// Main Page Component
export default function ProductsPage({ products }: ProductsPageProps) {
  const [activeTab, setActiveTab] = useState<'New Arrival' | 'Best Seller' | 'Sale'>('New Arrival');

  const allProducts = products?.length ? products : [];

  const filteredProducts = allProducts.filter(product => {
    if (activeTab === 'New Arrival') return product.badge === 'New Arrival';
    if (activeTab === 'Best Seller') return product.badge === 'Best Seller';
    if (activeTab === 'Sale') return product.originalPrice != null && product.originalPrice > product.price;
    return false;
  });

  return (
    <div className="bg-white">
      {/* <div className="container mx-auto px-4 max-w-7xl"> */}
      <div className="container mt-12 mx-auto px-4 max-w-screen-2xl">
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 border-b border-gray-200 pb-2">
          {(['New Arrival', 'Best Seller', 'Sale'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-xl font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 py-10">
              No products found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

