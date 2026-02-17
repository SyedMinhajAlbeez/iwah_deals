"use client";

import { FC, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    badge?: string;
    catalog: string;
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "ROSETTE BLUSH FORELLA FORMALS",
        image: "/image/imgtwo.png",
        price: 499.00,
        originalPrice: 699.00,
        rating: 4,
        reviews: 4,
        badge: "Best Seller",
        catalog: "26 - CATALOG"
    },
    {
        id: 2,
        name: "YOBETS ECLIPS FORELLA FORMALS",
        image: "/image/imgone.png",
        price: 499.00,
        originalPrice: 699.00,
        rating: 4,
        reviews: 4,
        badge: "Best Seller",
        catalog: "26 - CATALOG"
    },
    {
        id: 3,
        name: "EMILY LUXE RAW SILK FORMALS",
        image: "/image/imgfour.png",
        price: 499.00,
        originalPrice: 899.00,
        rating: 4,
        reviews: 4,
        badge: "Best Seller",
        catalog: "05 - CATALOG"
    },
    {
        id: 4,
        name: "VESPER LUXE RAW SILK FORMALS",
        image: "/image/imgthree.png",
        price: 499.00,
        originalPrice: 699.00,
        rating: 4,
        reviews: 4,
        badge: "Best Seller",
        catalog: "05 - CATALOG"
    },
    {
        id: 5,
        name: "AURORA SILK PREMIUM COLLECTION",
        image: "/image/imgfive.png",
        price: 599.00,
        originalPrice: 899.00,
        rating: 5,
        reviews: 8,
        badge: "New Arrival",
        catalog: "12 - CATALOG"
    },
    {
        id: 6,
        name: "CRYSTAL VELVET LUXURY WEAR",
        image: "/image/imgsix.png",
        price: 799.00,
        originalPrice: 1199.00,
        rating: 5,
        reviews: 12,
        badge: "Premium",
        catalog: "18 - CATALOG"
    },
    {
        id: 7,
        name: "DIAMOND CHIFFON ELEGANCE",
        image: "/image/imgseven.png",
        price: 449.00,
        originalPrice: 699.00,
        rating: 4,
        reviews: 6,
        badge: "Hot Deal",
        catalog: "22 - CATALOG"
    },
    {
        id: 8,
        name: "PEARL COTTON CASUAL WEAR",
        image: "/image/imgeight.png",
        price: 349.00,
        originalPrice: 599.00,
        rating: 4,
        reviews: 5,
        badge: "Sale",
        catalog: "15 - CATALOG"
    }
];

const BestSellingProducts: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const itemsPerView = 4;
    const maxIndex = Math.max(0, PRODUCTS.length - itemsPerView);

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const toggleFavorite = (productId: number) => {
        setFavorites((prev) => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(productId)) {
                newFavorites.delete(productId);
            } else {
                newFavorites.add(productId);
            }
            return newFavorites;
        });
    };

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
        <section className="w-full py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 border-2 border-[#D4A574] rounded-lg p-4">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        Best Selling Products
                    </h2>
                    <Link
                        href="/products"
                        className="text-sm font-medium text-[#0093D0] border border-[#0093D0] px-4 py-1.5 rounded-full hover:bg-[#0093D0] hover:text-white transition-colors"
                    >
                        See All Products
                    </Link>
                </div>

                {/* Products Slider Container */}
                <div className="relative border-2 border-[#D4A574] rounded-lg p-6">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${currentIndex === 0
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-100 hover:scale-110"
                            }`}
                        aria-label="Previous products"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Products Grid */}
                    <div className="overflow-hidden mx-12">
                        <div
                            ref={scrollContainerRef}
                            className="flex transition-transform duration-500 ease-in-out gap-4"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                            }}
                        >
                            {PRODUCTS.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                                    style={{ width: `calc(${100 / itemsPerView}% - 12px)` }}
                                >
                                    {/* Product Image */}
                                    <div className="relative aspect-[3/4] bg-gray-100">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            unoptimized
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />

                                        {/* Heart Icon */}
                                        <button
                                            onClick={() => toggleFavorite(product.id)}
                                            className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform z-10"
                                            aria-label="Add to favorites"
                                        >
                                            <Heart
                                                className={`w-4 h-4 ${favorites.has(product.id)
                                                    ? "fill-red-500 text-red-500"
                                                    : "text-gray-600"
                                                    }`}
                                            />
                                        </button>

                                        {/* Badge */}
                                        {product.badge && (
                                            <div className="absolute top-3 right-3 bg-[#0093D0] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                {product.badge}
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-4">
                                        {/* Rating & Reviews */}
                                        <div className="flex items-center gap-2 mb-2">
                                            {renderStars(product.rating)}
                                            <span className="text-xs text-gray-500">
                                                Reviews ({product.reviews})
                                            </span>
                                        </div>

                                        {/* Product Name */}
                                        <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 min-h-[40px]">
                                            {product.name}
                                        </h3>

                                        {/* Catalog */}
                                        <p className="text-xs text-gray-500 mb-3">
                                            ( {product.catalog} )
                                        </p>

                                        {/* Price */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-gray-400 line-through">
                                                ${product.originalPrice.toFixed(2)}
                                            </span>
                                            <span className="text-lg font-bold text-gray-900">
                                                ${product.price.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${currentIndex >= maxIndex
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-100 hover:scale-110"
                            }`}
                        aria-label="Next products"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BestSellingProducts;
