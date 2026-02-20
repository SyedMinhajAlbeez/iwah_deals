"use client";

import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { SliderProduct } from "./BestSellingProducts";

interface BestSellingSliderProps {
    products: SliderProduct[];
}

const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
            <svg
                key={star}
                className={`w-3 h-3 ${star <= rating ? "fill-[#FFA522]" : "fill-[#E5E7EB]"}`}
                viewBox="0 0 20 20"
            >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
        ))}
    </div>
);

const BestSellingSlider: FC<BestSellingSliderProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [favorites, setFavorites] = useState<Set<string>>(new Set());

    useEffect(() => {
        const initialFavorites = new Set(
            products.filter(p => p.isInWishlist).map(p => p.id)
        );
        setFavorites(initialFavorites);
    }, [products]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [itemsPerView, setItemsPerView] = useState(5);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (typeof window === 'undefined') return;
            
            const width = window.innerWidth;
            setIsMobile(width < 768);
            
            if (width < 500) {
                setItemsPerView(1.2); // Show partial card to indicate scroll
            } else if (width < 768) {
                setItemsPerView(2);
            } else if (width < 1024) {
                setItemsPerView(3);
            } else {
                setItemsPerView(4);
            }
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    const maxIndex = Math.max(0, products.length - itemsPerView);

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const toggleFavorite = (productId: string) => {
        setFavorites((prev) => {
            const next = new Set(prev);
            if (next.has(productId)) {
                next.delete(productId);
            } else {
                next.add(productId);
            }
            return next;
        });
    };

    if (!products.length) {
        return (
            <section className="w-full py-8">
                <div
                    className="container mx-auto px-4 border-2 border-[#fdad5a] rounded-lg p-4"
                    style={{ backgroundColor: "rgba(250, 165, 34, 0.06)" }}
                >
                    <div className="flex items-center justify-between mb-6 ml-2 mt-1">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                            Best Selling Products.
                        </h2>
                    </div>
                    <p className="text-gray-500 text-center py-8">No products found.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-8 md:py-12 px-2 md:px-4">
            <div
                className="container mx-auto border-2 border-[#fdad5a] rounded-3xl md:rounded-[2.5rem] p-4 sm:p-8 md:p-12"
                style={{ backgroundColor: "#FDF9F3" }}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6 md:mb-8">
                    <h2 className="text-xl md:text-3xl font-bold text-[#111111] tracking-tight">
                        Best Selling Products
                    </h2>
                    <Link
                        href="/products"
                        className="text-[10px] sm:text-xs font-semibold text-[#0093D0] border-2 border-[#0093D0] px-4 py-2 rounded-full hover:bg-[#0093D0] hover:text-white transition-all whitespace-nowrap"
                    >
                        See All Products
                    </Link>
                </div>

                {/* Slider */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className={`absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100/80 shadow-sm flex items-center justify-center transition-all ${currentIndex === 0 || itemsPerView < 2
                            ? "opacity-0 invisible"
                            : "hover:bg-white hover:shadow-md"
                            }`}
                        aria-label="Previous products"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                    </button>

                    {/* Products Grid */}
                    <div className="overflow-hidden">
                        <div
                            ref={scrollContainerRef}
                            className="flex transition-transform duration-500 ease-in-out gap-3 md:gap-6"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            }}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="group flex-shrink-0 bg-[#FDF9F3] transition-all"
                                    style={{
                                        width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * (isMobile ? 12 : 24)) / itemsPerView}px)`,
                                    }}
                                >
                                    <div className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                                        {/* Product Image */}
                                        <Link href={`/productPage/${product.urlKey}`}>
                                            <div className="relative aspect-square m-3 rounded-2xl overflow-hidden bg-gray-50">
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
                                                        toggleFavorite(product.id);
                                                    }}
                                                    className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-110 transition-transform z-10"
                                                    aria-label="Add to favorites"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                                        <Heart className={`w-3.5 h-3.5 ${favorites.has(product.id) ? "fill-[#FF2E2E] text-[#FF2E2E]" : "text-gray-400"}`} />
                                                    </div>
                                                </button>

                                                {/* Badge */}
                                                {product.badge && (
                                                    <div className="absolute top-3 right-3 bg-[#0093D0] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                                                        {product.badge}
                                                    </div>
                                                )}
                                            </div>
                                        </Link>

                                        {/* Product Info */}
                                        <div className="px-5 pb-6">
                                            {/* Rating & Reviews */}
                                            <div className="flex items-center gap-2 mb-3">
                                                {renderStars(product.rating)}
                                                <span className="text-[10px] text-gray-400 font-medium">
                                                    Reviews ({product.reviews})
                                                </span>
                                            </div>

                                            {/* Product Name */}
                                            <h3 className="text-[13px] font-extrabold text-[#111111] mb-1 line-clamp-2 min-h-[36px] uppercase tracking-tight leading-tight">
                                                {product.name}
                                            </h3>

                                            {/* Catalog */}
                                            <p className="text-[10px] font-bold text-gray-400 mb-4">
                                                ( {product.catalog} )
                                            </p>

                                            {/* Price */}
                                            <div className="flex flex-col">
                                                <span className="text-[11px] text-gray-400 line-through leading-none">
                                                    BHD {(product.originalPrice || product.price).toFixed(2)}
                                                </span>
                                                <span className="text-lg font-black text-[#111111] leading-tight mt-1">
                                                    BHD {product.price.toFixed(2)}
                                                </span>
                                            </div>
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
                        className={`absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100/80 shadow-sm flex items-center justify-center transition-all ${currentIndex >= maxIndex || itemsPerView < 2
                            ? "opacity-0 invisible"
                            : "hover:bg-white hover:shadow-md"
                            }`}
                        aria-label="Next products"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BestSellingSlider;
