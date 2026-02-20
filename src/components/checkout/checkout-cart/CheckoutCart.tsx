"use client";

import { Price } from "@components/theme/ui/Price";

type CartRow = {
  id: string;
  name: string;
  price: number;
  amount: number;
  qty: number;
  image?: string;
};

export default function CheckoutCart({
  cartItems,
}: {
  cartItems: any;
  selectedShippingRate?: any;
}) {
  const cart: CartRow[] = Array.isArray(cartItems)
    ? cartItems.map((item: any) => ({
        id: item?.id ?? "",
        name: item?.name ?? "",
        price: Number(item?.price ?? 0),
        qty: Number(item?.qty ?? 1),
        image: item?.image,
      }))
    : Array.isArray(cartItems?.items?.edges)
      ? cartItems.items.edges.map((edge: any) => ({
          id: edge?.node?.id ?? "",
          name: edge?.node?.name ?? "",
          price: Number(edge?.node?.price ?? 0),
          qty: Number(edge?.node?.quantity ?? 1),
          image: edge?.node?.image,
        }))
      : [];

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  console.log("CheckoutCart - cart:", cart);

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12 bg-white">
      {/* Checkmark Icon */}
      <div className="flex justify-center mb-6">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circle */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#1a1a1a"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="240 40"
            strokeDashoffset="0"
          />
          {/* Checkmark */}
          <polyline
            points="28,52 43,67 72,36"
            stroke="#FDA33A"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Thank You Message */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-neutral-900 mb-2">
          Thank you for placing your order with our store!
        </h2>
        <p className="text-sm text-neutral-500">
          This email is to confirm your recent order
        </p>
      </div>

      {/* Product Table */}
      <div className="w-full">
        {/* Header */}
        <div
          className="flex justify-between px-6 py-3"
          style={{ backgroundColor: "#FDA33A" }}
        >
          <span className="text-sm font-semibold text-white">Products</span>
          <span className="text-sm font-semibold text-white">Price</span>
        </div>

        {/* Items */}
        <div className="border border-t-0 border-neutral-200">
          {cart.map((item, i) => (
            <div
              key={item.id || i}
              className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 last:border-b-0"
            >
              <span className="text-sm text-neutral-700">
                {item.qty} X {item.name}
              </span>
              <Price
                amount={item.price.toString()}
                className="text-sm text-neutral-700"
                currencyCode="BHD"
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-neutral-300 mt-2" />

        {/* Total */}
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-base font-bold text-neutral-900">Total</span>
          <Price
            amount={total.toString()}
            className="text-base font-bold text-neutral-900"
            currencyCode="BHD"
          />
        </div>

        {/* Bottom Divider */}
        <hr className="border-neutral-300" />
      </div>
    </div>
  );
}
