"use client";

import { FC } from "react";

interface QuantitySelectorProps {
    quantity: number;
    onQuantityChange: (quantity: number) => void;
}

export const QuantitySelector: FC<QuantitySelectorProps> = ({ quantity, onQuantityChange }) => {
    const decrement = () => onQuantityChange(Math.max(1, quantity - 1));
    const increment = () => onQuantityChange(quantity + 1);

    return (
        <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-gray-400">Quantity:</span>
            <div
                className="flex items-center justify-between px-3 bg-white/50 backdrop-blur-sm w-[130px] h-[38px] rounded-full border border-[#D1D1D1]"
                style={{
                    backgroundImage: "linear-gradient(white, white), linear-gradient(0deg, rgba(131, 127, 127, 0.75) 0%, rgba(255, 255, 255, 0.75) 69.71%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box"
                }}
            >
                <button
                    onClick={decrement}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5E5E5E] text-white transition-opacity hover:opacity-80 disabled:opacity-30"
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                >
                    <span className="text-md leading-none">−</span>
                </button>
                <span className="text-lg font-bold text-gray-800">{quantity}</span>
                <button
                    onClick={increment}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5E5E5E] text-white transition-opacity hover:opacity-80"
                    aria-label="Increase quantity"
                >
                    <span className="text-md leading-none">+</span>
                </button>
            </div>
        </div>
    );
};
