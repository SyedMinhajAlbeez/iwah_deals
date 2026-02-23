"use client";

import React, { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { ProductSort } from "./ProductSort";
import { ProductPagination } from "./ProductPagination";

export interface SliderProduct {
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
}

interface ProductListingProps {
  initialProducts: SliderProduct[];
}

export const ProductListing: React.FC<ProductListingProps> = ({
  initialProducts,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products] = useState<SliderProduct[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const productsPerPage = 12;

  // Filter options (Mock counts for design as requested)
  const categories = [
    { name: "Casual wear", count: 15 },
    { name: "Formal Collection", count: 45 },
    { name: "Festive Collection", count: 1 },
  ];

  const priceRangesWithCounts = [
    { id: "price-0", label: "BHD 0.00 - BHD 1,000.00", min: 0, max: 1000, count: 35 },
    { id: "price-1", label: "BHD 1,000.00 - BHD 2,000.00", min: 1000, max: 2000, count: 15 },
    { id: "price-2", label: "BHD 2,000.00 - BHD 3,000.00", min: 2000, max: 3000, count: 8 },
    { id: "price-3", label: "BHD 3,000.00 - BHD 4,000.00", min: 3000, max: 4000, count: 5 },
  ];

  const colorsWithCounts = [
    { name: "Black", color: "black", count: 18 },
    { name: "Red", color: "red", count: 12 },
    { name: "Blue", color: "blue", count: 15 },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedPriceRange !== "all") {
      const range = priceRangesWithCounts.find(
        (r) => r.id === selectedPriceRange
      );
      if (range) {
        result = result.filter(
          (product) => product.price >= range.min && product.price <= range.max
        );
      }
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [products, selectedCategory, selectedPriceRange, selectedColors, sortBy]);

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedPriceRange !== "all" ? 1 : 0) +
    selectedColors.length;

  const totalProducts = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalProducts / productsPerPage));

  const rawPage = searchParams?.get("page");
  const currentPage = Math.max(1, Number.parseInt(rawPage ?? "1", 10) || 1);
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const indexOfLastProduct = safeCurrentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const firstItem = totalProducts === 0 ? 0 : indexOfFirstProduct + 1;
  const lastItem = Math.min(indexOfLastProduct, totalProducts);

  const handlePageChange = (page: number) => {
    const nextPage = Math.max(1, Math.min(totalPages, page));
    const params = new URLSearchParams(searchParams?.toString() ?? "");

    if (nextPage === 1) params.delete("page");
    else params.set("page", String(nextPage));

    const query = params.toString();
    router.push(query ? `?${query}` : "?");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleClearAll = () => {
    setSelectedCategory("all");
    setSelectedPriceRange("all");
    setSelectedColors([]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:hidden flex justify-between items-center mb-4">
        <p className="text-gray-600">{totalProducts} Products</p>
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="px-6 py-2 bg-[#111111] text-white rounded-full text-sm font-bold"
        >
          {showMobileFilters ? "Hide Filters" : "Filters"}
        </button>
      </div>

      <div className={`lg:w-1/4 ${showMobileFilters ? "block" : "hidden lg:block"}`}>
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRanges={priceRangesWithCounts}
          selectedPriceRange={selectedPriceRange}
          onPriceRangeChange={setSelectedPriceRange}
          colors={colorsWithCounts}
          selectedColors={selectedColors}
          onColorChange={handleColorChange}
          onClearAll={handleClearAll}
          onApplyFilters={() => setShowMobileFilters(false)}
          activeFilterCount={activeFilterCount}
        />
      </div>

      <div className="lg:w-3/4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <p className="text-gray-600 hidden lg:block">
            Showing {firstItem} - {lastItem} of {totalProducts} products
          </p>
          <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        {currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <ProductPagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-[2rem] shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg mb-6">
              No products found matching your criteria.
            </p>
            <button
              onClick={handleClearAll}
              className="px-8 py-3 bg-[#111111] text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
