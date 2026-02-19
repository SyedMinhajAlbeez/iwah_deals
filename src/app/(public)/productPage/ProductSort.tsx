// components/ProductSort.tsx
import React from 'react';

interface ProductSortProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const ProductSort: React.FC<ProductSortProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="sort" className="text-gray-700 font-medium">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="default">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};