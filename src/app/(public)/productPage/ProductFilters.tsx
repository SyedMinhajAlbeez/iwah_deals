// components/ProductFilters.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface ProductFiltersProps {
  categories: Array<{ name: string; count: number }>;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRanges: Array<{ id: string; label: string; min: number; max: number; count: number }>;
  selectedPriceRange: string;
  onPriceRangeChange: (rangeId: string) => void;
  colors: Array<{ name: string; color: string; count?: number }>;
  selectedColors: string[];
  onColorChange: (color: string) => void;
  onClearAll: () => void;
  onApplyFilters: () => void;
  activeFilterCount: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRanges,
  selectedPriceRange,
  onPriceRangeChange,
  colors,
  selectedColors,
  onColorChange,
  onClearAll,
  onApplyFilters,
  activeFilterCount
}) => {
  const [showAllPrices, setShowAllPrices] = useState(false);
  
  // Show first 7 price ranges by default, or all if "Show More" is clicked
  const displayedPriceRanges = showAllPrices ? priceRanges : priceRanges.slice(0, 7);

  // Color circle component
  const ColorCircle = ({ color }: { color: string }) => {
    const getColorClass = () => {
      switch(color.toLowerCase()) {
        case 'black': return 'bg-black';
        case 'red': return 'bg-red-600';
        case 'blue': return 'bg-blue-600';
        case 'green': return 'bg-green-600';
        case 'yellow': return 'bg-yellow-500';
        case 'purple': return 'bg-purple-600';
        case 'pink': return 'bg-pink-500';
        case 'brown': return 'bg-amber-800';
        case 'gray': return 'bg-gray-500';
        case 'white': return 'bg-white border border-gray-300';
        default: return 'bg-gray-400';
      }
    };

    return (
      <div className={`w-5 h-5 rounded-full ${getColorClass()}`} />
    );
  };

  return (
    <div>
      <div className="rounded-lg shadow-md p-6 bg-[rgba(250,165,34,0.06)]">
        {/* Header with Clear Filter */}
        
        <div className="items-center mb-6">
          <div className='text-center'>
            <h2 className="text-xl font-semibold text-gray-800">Brands</h2>
            <button onClick={onClearAll} className="text-blue-600 hover:text-blue-800 font-medium mt-3 border border-blue-300 py-2 px-4 rounded-full">
              Clear Filter
            </button>
          </div> 
        </div>
        
        {/* Category Filter */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Category</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <label key={category.name} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="category"
                    value={category.name}
                    checked={selectedCategory === category.name}
                    onChange={() => onCategoryChange(category.name)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{category.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Price</h3>
          <div className="space-y-3">
            {displayedPriceRanges.map((range) => (
              <label key={range.id} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.id}
                    checked={selectedPriceRange === range.id}
                    onChange={() => onPriceRangeChange(range.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    {range.label}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{range.count}</span>
              </label>
            ))}
            
            {/* Show More/Less button */}
            {priceRanges.length > 7 && (
              <button
                onClick={() => setShowAllPrices(!showAllPrices)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-2 ml-7"
              >
                {showAllPrices ? '- Show Less' : '+ Show More'}
              </button>
            )}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Color</h3>
          <div className="flex flex-col space-y-3">
            {colors.map((color) => (
              <label key={color.name} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color.name)}
                    onChange={() => onColorChange(color.name)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div className="flex items-center space-x-2">
                    <ColorCircle color={color.name} />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                      {color.name}
                    </span>
                  </div>
                </div>
                {color.count !== undefined && (
                  <span className="text-sm text-gray-500">{color.count}</span>
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        {activeFilterCount > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={onApplyFilters}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              Apply Filters ({activeFilterCount})
            </button>
          </div>
        )}
      </div>
      <div className="rounded-lg shadow-md p-6 pt-3 mt-5 bg-[rgba(250,165,34,0.06)]">
        <div className="items-center mb-6">
          <div className='text-center'>
            <h2 className="text-xl font-semibold text-gray-800">Brands</h2>
            <button className="text-gray-600 hover:text-gray-800 font-medium mt-3 border border-gray-300 py-2 px-4 rounded-full">
              All Brands
            </button>
          </div> 
        </div>
        
        <div className="space-y-3">
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Image src="/image/partners/partner1.png" alt="Brand 1" width={120} height={60} className="w-30 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" sizes="120px" />
              <Image src="/image/partners/partner2.png" alt="Brand 2" width={120} height={60} className="w-30 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" sizes="120px" />
              <Image src="/image/partners/partner3.png" alt="Brand 3" width={120} height={60} className="w-30 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" sizes="120px" />
              <Image src="/image/partners/partner4.png" alt="Brand 4" width={120} height={60} className="w-30 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" sizes="120px" />
              <Image src="/image/partners/partner5.png" alt="Brand 5" width={120} height={60} className="w-30 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" sizes="120px" />
              <Image src="/image/partners/partner6.png" alt="Brand 6" width={120} height={60} className="w-30 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" sizes="120px" />
              <Image src="/image/partners/partner7.png" alt="Brand 7" width={120} height={60} className="w-30 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" sizes="120px" />
            </div>
        </div>
      </div>
    <div className="rounded-lg shadow-md p-6 pt-3 mt-5 bg-[rgba(250,165,34,0.06)]">
        <div className="items-center">
          <div className='text-center'>
            <h2 className="text-xl font-semibold text-black-800">My Wishlist</h2>
            <p>You have no items in your wishlist</p>
          </div> 
        </div>
      </div>
      
    </div>

  );
};
