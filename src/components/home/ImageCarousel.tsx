"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const banners = [
    {
        src: "/image/webBanner1.jpg",
        link: "summer-sale",
        title: "Big Summer Discount",
    },
    {
        src: "/image/webBanner2.jpg",
        link: "new-arrivals",
        title: "New Collection 2025",
    },
    {
        src: "/image/webBanner3.jpg",
        link: "",
        title: "Flash Deals",
    },
    {
        src: "/image/webBanner4.jpg",
        link: "electronics",
        title: "Best Gadgets",
    },
    {
        src: "/image/webBanner5.jpg",
        link: "fashion",
        title: "Trendy Styles",
    },
];

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isPaused || banners.length <= 1) return;

        autoplayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 5000);

        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, [isPaused]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 8000);
    };

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const distance = touchStartX.current - touchEndX.current;
        if (Math.abs(distance) > 50) {
            if (distance > 0) {
                setCurrentIndex((prev) => (prev + 1) % banners.length);
            } else {
                setCurrentIndex(
                    (prev) => (prev - 1 + banners.length) % banners.length,
                );
            }
        }
    };

    return (
        <section className="w-full mt-8 space-y-6">
            {/* Main Carousel */}
            <div
                className="relative w-full rounded-2xl bg-gray-300 overflow-hidden group"
                style={{ height: "500px" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Carousel Slides */}
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                            currentIndex === index
                                ? "opacity-100"
                                : "opacity-0 pointer-events-none"
                        }`}
                    >
                        {banner.link ? (
                            <Link
                                href={`/search/${banner.link}`}
                                className="block w-full h-full"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={banner.src}
                                        alt={banner.title}
                                        fill
                                        className="object-cover object-center"
                                        priority={index === 0}
                                        sizes="100vw"
                                    />
                                </div>
                            </Link>
                        ) : (
                            <div className="relative w-full h-full">
                                <Image
                                    src={banner.src}
                                    alt={banner.title}
                                    fill
                                    className="object-cover object-center"
                                    priority={index === 0}
                                    sizes="100vw"
                                />
                            </div>
                        )}
                    </div>
                ))}

                {/* Navigation Dots - Fixed at Bottom */}
                {banners.length > 1 && (
                    <div 
                        className="absolute left-1/2 transform -translate-x-1/2 z-50 flex gap-2 bg-black/40 px-4 py-3 rounded-full backdrop-blur-sm pointer-events-auto"
                        style={{ bottom: "32px" }}
                    >
                        {banners.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`transition-all duration-300 cursor-pointer h-2.5 rounded-full ${
                                    currentIndex === index
                                        ? "w-8 bg-white"
                                        : "w-2.5 bg-white/50 hover:bg-white/80"
                                }`}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Exclusive Deals Banner */}
            <Link href="/exclusive-deals" className="block w-full">
                <div className="relative w-full rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full" style={{ height: "194px", aspectRatio: "16 / 4" }}>
                        <Image
                            src="/image/webBanner7.gif"
                            alt="Exclusive Deals"
                            fill
                            className="object-cover object-center"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            </Link>
        </section>
    );
}