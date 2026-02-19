"use client";

import { FC } from "react";

interface SizeSelectorProps {
    selectedSize: string;
    onSizeSelect: (size: string) => void;
}

const SIZES = ["XS", "S", "M", "L", "XL"];

export const SizeSelector: FC<SizeSelectorProps> = ({ selectedSize, onSizeSelect }) => {
    return (
        <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-gray-400">Select Size</span>
            <div
                className="flex items-center gap-3 w-full max-w-[400px]"
            >
                {SIZES.map((size) => (
                    <button
                        key={size}
                        onClick={() => onSizeSelect(size)}
                        className={`flex h-[42px] w-[58px] items-center justify-center text-sm font-semibold transition-all duration-300
                            ${selectedSize === size
                                ? "bg-[#F98814] text-white"
                                : "bg-[#EDECEC] text-gray-400 hover:bg-gray-200"
                            }`}
                        style={{ borderRadius: 6 }}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};
