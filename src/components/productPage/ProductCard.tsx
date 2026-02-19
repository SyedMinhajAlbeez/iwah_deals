// components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    rating: number;
    inStock: boolean;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">
            ★ {product.rating}
          </span>
        </div>
        {product.inStock ? (
          <span className="text-green-600 text-sm">In Stock</span>
        ) : (
          <span className="text-red-600 text-sm">Out of Stock</span>
        )}
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};