"use client";

import { FC, useState } from "react";
import { Product } from "@/data/products";
import { ProductGallery } from "./ProductGallery";
import { SizeSelector } from "./SizeSelector";
import { QuantitySelector } from "./QuantitySelector";
import { ProductAccordion } from "./ProductAccordion";
import { useAppDispatch } from "@/store/hooks";
import { pushItem } from "@/store/slices/cart-slice";
import { useRouter } from "next/navigation";
import { useCustomToast } from "@/utils/hooks/useToast";
import { CustomerReviews } from "./customerReview";

// Re-implementing StarRating locally for self-containment/custom styling
const StarRatingLocal: FC<{ rating: number; count: number }> = ({
  rating,
  count,
}) => (
  <div className="flex items-center gap-[4px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill={i < rating ? "#F5A623" : "#E0E0E0"}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span className="ml-2 text-sm text-gray-400">({count} reviews)</span>
  </div>
);

interface ProductDetailViewProps {
  product: Product;
}

export const ProductDetailView: FC<ProductDetailViewProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { showToast } = useCustomToast();

  const handleAddToCart = () => {
    dispatch(
      pushItem({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: quantity,
        image: product.image,
      }),
    );
    showToast("Product added to cart", "success");
    router.push("/cart");
  };

  const handleBuyNow = () => {
    dispatch(
      pushItem({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: quantity,
        image: product.image,
      }),
    );
    // router.push("/checkout");
  };

  return (
    <div className="relative min-h-[1200px] lg:min-h-[1600px] bg-white overflow-x-hidden w-full max-w-[1920px] mx-auto">
      {/* Top Background Section - Fixed Height */}
      <div
        className="absolute top-0 left-0 w-full z-0 h-[451px]"
        style={{
          backgroundColor: "#BBD6EA",
          opacity: 1,
        }}
      />

      {/* Shop Now Background Text - Positioned relatively to avoid layout breakage */}
      <div
        className="absolute z-10 pointer-events-none select-none overflow-hidden whitespace-nowrap hidden lg:block"
        style={{
          width: "42%",
          height: "auto",
          top: "309px",
          left: "46%",
          opacity: 1,
        }}
      >
        <h1
          className="text-white font-black leading-none"
          style={{ fontSize: "clamp(60px, 6.7vw, 130px)" }}
        >
          Shop Now
        </h1>
      </div>

      {/* Main Content Area - Using Grid for robust scaling */}
      <div className="relative z-30 pt-10 px-4 md:px-10 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-start gap-10 lg:gap-[92px] lg:pt-[100px]">
          {/* Left Column: Product Gallery */}
          <div className="w-full max-w-[629px] shrink-0">
            <ProductGallery images={product.thumbnails || [product.image]} />
          </div>

          {/* Right Column: Details Section with top offset for 1920px design */}
          <div
            className="flex flex-col w-full max-w-[621px] bg-white rounded-3xl p-6 md:p-10 lg:mt-[407px] lg:px-12 lg:py-10"
            style={{
              boxShadow: "0 10px 50px rgba(0,0,0,0.05)",
            }}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-[32px] md:text-4xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h2>
                <p className="text-lg md:text-xl font-medium text-gray-500 mt-1">
                  {product.brand}
                </p>
              </div>
              <div className="text-right ml-4">
                <p className="text-3xl md:text-[38px] font-bold text-gray-900 leading-none">
                  BHD {product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-400 mt-1">Price</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-gray-900 font-bold text-lg">
              <span className="text-[20px]">{product.rating.toFixed(1)}</span>
              <StarRatingLocal
                rating={product.rating}
                count={product.reviewCount}
              />
            </div>

            <div className="mt-8 space-y-8">
              <SizeSelector
                selectedSize={selectedSize}
                onSizeSelect={setSelectedSize}
              />
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBuyNow}
                className="flex items-center justify-center bg-[#1B1B1B] text-white font-bold transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-[251px] h-[58px] rounded-xl text-base"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center bg-[#098EB9] text-white font-bold transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-[251px] h-[58px] rounded-xl text-base"
              >
                Add to your cart
              </button>
            </div>

            <div className="mt-10 border-t pt-8">
              <ProductAccordion
                description={product.description}
                careInstructions={product.careInstructions}
                disclaimer={product.disclaimer}
              />
            </div>
          </div>
        </div>

        {/* Description - Follows the natural flow below the grid */}
        <div className="mt-20 lg:mt-[150px] pb-20 max-w-[800px]">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Description:
          </h3>
          <p className="text-gray-500 leading-relaxed text-lg">
            {product.description ||
              "This adorable ensemble features premium fabric with a playful character detail, perfectly paired with a soft, pastel-toned long-sleeve top. Designed for both comfort and style, it's the ideal outfit for your little one's daily adventures and playdates."}
          </p>
        </div>
        {/* ──────────────────────────────────────────────────────────────
                    👇 2. Drop CustomerReviews right here — after the description
                ────────────────────────────────────────────────────────────── */}
        <div className="mt-16 pb-20">
          <CustomerReviews />
        </div>
      </div>
    </div>
  );
};
