"use client";

import { FC, useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
}

export const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="relative flex flex-col items-center">
            {/* Main Image Container - Pixel Perfect Dimensions */}
            <div
                className="relative overflow-hidden shadow-2xl transition-all duration-500 w-full max-w-[629px] aspect-[629/1131]"
                style={{
                    borderRadius: "clamp(20px, 5vw, 58px)",
                    opacity: 1
                }}
            >
                <Image
                    src={activeImage}
                    alt="Product image"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="629px"
                />

                {/* Wishlist Heart Icon Overlay */}
                <button
                    className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/40"
                    aria-label="Add to wishlist"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>

                {/* Overlaid Thumbnails at Bottom */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 px-4">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`relative h-[120px] w-[90px] overflow-hidden rounded-2xl border-4 transition-all duration-300 ${activeImage === img ? "border-white" : "border-transparent opacity-60 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="90px"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
