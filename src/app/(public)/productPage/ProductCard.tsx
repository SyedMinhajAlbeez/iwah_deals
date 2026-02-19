// components/ProductCard.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    description: string;
    imageUrl: string;
    image?: string;
    category: string;
    catalogNumber: string;
    catalog?: string;
    rating: number;
    reviewCount: number;
    reviews?: number;
    badge?: string;
    color: string;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  // Use appropriate image field
  const imageSrc = product.imageUrl || product.image || '';

  // Format catalog display
  const catalogDisplay = product.catalog || `${product.catalogNumber} - CATALOG`;

  // Use appropriate review count
  const reviewCount = product.reviewCount || product.reviews || 0;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 ${star <= rating ? "fill-yellow-400" : "fill-gray-300"}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-gray-100">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Heart Icon */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform z-10"
          aria-label="Add to favorites"
        >
          <Heart
            className={`w-4 h-4 ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* Badge */}
        {/* {product.badge && (
          <div className="absolute top-3 right-3 bg-[#0093D0] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.badge}
          </div>
        )} */}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-2">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-500">
            Reviews ({reviewCount})
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        {/* Catalog */}
        <p className="text-xs text-gray-500 mb-3">
          ( {catalogDisplay} )
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-lg font-bold text-gray-900">
            {product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};


