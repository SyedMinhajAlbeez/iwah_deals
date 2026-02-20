// components/ProductCard.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

import Link from 'next/link';

export interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    image: string;
    rating: number;
    reviews: number;
    badge?: string;
    catalog: string;
    urlKey: string;
    isInWishlist: boolean;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(product.isInWishlist);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 ${star <= rating ? "fill-[#FFA522]" : "fill-gray-200"}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="group bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Product Image */}
      <Link href={`/productPage/${product.urlKey}`} className="block relative aspect-square m-3 rounded-2xl overflow-hidden bg-gray-50 uppercase">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Heart Icon */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform z-10"
          aria-label="Add to favorites"
        >
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <Heart
              className={`w-3.5 h-3.5 ${isLiked ? "fill-[#FF2E2E] text-[#FF2E2E]" : "text-gray-400"
                }`}
            />
          </div>
        </button>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-[#0093D0] text-white text-[10px] font-bold px-3 py-1 rounded-full px-4">
            {product.badge}
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-3">
          {renderStars(product.rating)}
          <span className="text-[10px] text-gray-400 font-medium">
            Reviews ({product.reviews})
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-bold text-[#111111] leading-tight line-clamp-2 uppercase min-h-[2.5rem] mb-1">
          {product.name}
        </h3>

        {/* Catalog */}
        <p className="text-[10px] text-gray-400 font-medium mb-3">
          ( {product.catalog} )
        </p>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex flex-col">
            {/* {product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through font-medium">
                BHD{product.originalPrice.toFixed(2)}
              </span>
            )} */}
            <span className="text-[11px] text-gray-400 line-through leading-none">
              BHD {(product.originalPrice || product.price).toFixed(2)}
            </span>
            <span className="text-lg font-extrabold text-[#111111]">
              BHD {product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


