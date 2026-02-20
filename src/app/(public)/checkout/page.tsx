"use client";
import CheckoutCart from "@/components/checkout/checkout-cart/CheckoutCart";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function CheckoutCartClient() {
  const cartItems = useSelector((state: RootState) => state.cartDetail.localItems);
  return <CheckoutCart cartItems={cartItems} />;
}