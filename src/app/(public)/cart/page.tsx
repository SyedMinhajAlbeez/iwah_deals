"use client";

import dynamic from "next/dynamic";

const ShoppingCart = dynamic(
  () => import("@/components/cart/ShoppingCart"),
  { ssr: false }
);

export default function CartPage() {
  return (
    <div className="bg-white">
      <ShoppingCart />
    </div>
  );
}
