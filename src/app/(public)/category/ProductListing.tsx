"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Product type definition
interface Product {
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

// Extended mock products covering all filter categories
const mockProducts: Product[] = [
  // Best Seller
  {
    id: "c1",
    color: "Black",
    name: "BLACK CASUAL BLAZER",
    description: "Versatile black blazer for casual occasions. Perfect for smart casual events.",
    price: 249.00,
    originalPrice: 299.00,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 12,
    reviewCount: 12,
    badge: "Best Seller",
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  // Trending
  {
    id: "c2",
    color: "Blue",
    name: "BLUE DENIM JACKET",
    description: "Classic blue denim jacket for everyday casual wear.",
    price: 189.00,
    originalPrice: 229.00,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 8,
    reviewCount: 8,
    badge: "Trending",
    catalog: "15 - CATALOG",
    catalogNumber: "15"
  },
  // New Arrival
  {
    id: "n1",
    color: "Beige",
    name: "BEIGE LINEN BLAZER",
    description: "Lightweight linen blazer for summer days. A fresh new style.",
    price: 279.00,
    originalPrice: 279.00,
    image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=500&auto=format&fit=crop",
    category: "Formal wear",
    rating: 5,
    reviews: 3,
    reviewCount: 3,
    badge: "New Arrival",
    catalog: "16 - CATALOG",
    catalogNumber: "16"
  },
  {
    id: "n2",
    color: "Olive",
    name: "OLIVE UTILITY JACKET",
    description: "Trendy utility jacket with multiple pockets. Just landed.",
    price: 199.00,
    originalPrice: 199.00,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
    category: "Casual wear",
    rating: 4,
    reviews: 5,
    reviewCount: 5,
    badge: "New Arrival",
    catalog: "16 - CATALOG",
    catalogNumber: "16"
  },
  // Best Seller
  {
    id: "b1",
    color: "Grey",
    name: "GREY WOOL OVERCOAT",
    description: "Elegant wool overcoat, a customer favourite this season.",
    price: 399.00,
    originalPrice: 450.00,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop",
    category: "Outerwear",
    rating: 5,
    reviews: 24,
    reviewCount: 24,
    badge: "Best Seller",
    catalog: "14 - CATALOG",
    catalogNumber: "14"
  },
  // Sale items
  {
    id: "s1",
    color: "Navy",
    name: "NAVY BLAZER",
    description: "Classic navy blazer, now at a discounted price.",
    price: 199.00,
    originalPrice: 299.00,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=500&auto=format&fit=crop",
    category: "Formal wear",
    rating: 4,
    reviews: 18,
    reviewCount: 18,
    badge: "Sale",
    catalog: "13 - CATALOG",
    catalogNumber: "13"
  },
  {
    id: "s2",
    color: "Brown",
    name: "BROWN LEATHER JACKET",
    description: "Genuine leather jacket with great savings. Limited stock.",
    price: 349.00,
    originalPrice: 499.00,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop",
    category: "Outerwear",
    rating: 4,
    reviews: 9,
    reviewCount: 9,
    badge: "Sale",
    catalog: "13 - CATALOG",
    catalogNumber: "13"
  }
];

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
export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'New Arrival' | 'Best Seller' | 'Sale'>('New Arrival');

  const filteredProducts = mockProducts.filter(product => {
    if (activeTab === 'New Arrival') return product.badge === 'New Arrival';
    if (activeTab === 'Best Seller') return product.badge === 'Best Seller';
    if (activeTab === 'Sale') return product.originalPrice != null && product.originalPrice > product.price;
    return false;
  });

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
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

