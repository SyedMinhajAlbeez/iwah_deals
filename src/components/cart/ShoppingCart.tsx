"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  removeLocalItem,
  updateLocalQty,
  clearLocalCart,
} from "@/store/slices/cart-slice";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const items = useAppSelector((state) => state.cartDetail.localItems);



  console.log("Cart Items:", items); // Debug log to check cart items

  const [shippingOpen, setShippingOpen] = useState(true);
  const [discountOpen, setDiscountOpen] = useState(true);

  const updateQty = (id: number | string, delta: number) => {
    dispatch(updateLocalQty({ id, delta }));
  };

  const removeItem = (id: number | string) => {
    dispatch(removeLocalItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearLocalCart());
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = items.length > 0 ? 21.0 : 0;
  const tax = items.length > 0 ? 1.91 : 0;
  const gst = items.length > 0 ? 1.91 : 0;
  const orderTotal = subtotal + shipping + tax + gst;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "BHD" });

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top blue bar */}
      <div className="h-1  w-full" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
          <a href="/" className="hover:text-gray-800 transition-colors">
            Home
          </a>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800">Shopping Cart</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items */}
          <div className="flex-1 w-full">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-[2fr_auto_auto_auto_auto] gap-4 pb-3 border-b border-gray-200 text-sm font-medium text-gray-700">
              <span>Item</span>
              <span className="w-28 text-center">Price</span>
              <span className="w-20 text-center">Qty</span>
              <span className="w-28 text-center">Subtotal</span>
              <span className="w-8" />
            </div>

            {/* Items */}
            <div className="divide-y divide-gray-200">
              {items.length === 0 ? (
                <div className="py-10 text-center text-gray-500">
                  Your cart is empty.
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-[2fr_auto_auto_auto_auto] gap-4 py-5 items-center"
                  >
                    {/* Item info */}
                    <div className="flex items-center gap-4">
                      <div className="w-[90px] h-[90px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-800 leading-snug max-w-xs">
                        {item.name}
                      </p>
                    </div>

                    {/* Price */}
                    <span className="w-full md:w-28 text-center text-sm font-medium text-gray-900">
                      <span className="md:hidden text-gray-500 mr-2">
                        Price:
                      </span>
                      {fmt(item.price)}
                    </span>

                    {/* Qty stepper */}
                    <div className="flex justify-center">
                      <div className="w-20 flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
                        <span className="flex-1 text-center text-sm py-1 select-none">
                          {item.qty}
                        </span>
                        <div className="flex flex-col border-l border-gray-300">
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="px-2 py-0.5 text-xs hover:bg-gray-100 transition-colors leading-none"
                          >
                            ▲
                          </button>
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="px-2 py-0.5 text-xs hover:bg-gray-100 transition-colors leading-none border-t border-gray-300"
                          >
                            ▼
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <span className="w-full md:w-28 text-center text-sm font-semibold text-gray-900">
                      <span className="md:hidden text-gray-500 mr-2">
                        Subtotal:
                      </span>
                      {fmt(item.price * item.qty)}
                    </span>

                    {/* Actions */}
                    <div className="w-full md:w-8 flex md:flex-col items-center justify-center gap-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-400 transition-colors text-xs"
                        title="Remove Item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Buttons */}
            <div className="flex items-center justify-between mt-6 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                {/* Continue Shopping */}
                <a
                  href="/"
                  className="px-6 py-2.5 text-sm font-medium text-gray-700 rounded-full transition-all hover:bg-gray-50 border-2 border-[#A2A6B0] no-underline"
                >
                  Continue Shopping
                </a>

                {/* Clear Shopping Cart */}
                <button
                  onClick={handleClearCart}
                  className="px-6 py-2.5 text-sm font-medium text-white rounded-full transition-all hover:opacity-80 bg-[#009ACF]"
                >
                  Clear Shopping Cart
                </button>
              </div>

              {/* Update Cart */}
              <button className="px-6 py-2.5 text-sm font-medium text-white rounded-full bg-[#1B1B1B] hover:opacity-90 transition-colors">
                Update Shopping Cart
              </button>
            </div>
          </div>

          {/* Summary Card */}
          <div
            className="w-full lg:w-[446px] flex-shrink-0 rounded-[22px] p-6"
            style={{
              background: "#FAA5220F",
              border: "1px solid #FAA522",
            }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-5">Summary</h2>

            {/* Estimate Shipping */}
            <div className="border-b border-amber-200 pb-4 mb-4">
              <button
                className="flex items-center justify-between w-full text-sm font-semibold text-gray-800 hover:text-gray-900"
                onClick={() => setShippingOpen(!shippingOpen)}
              >
                <span>Estimate Shipping and Tax</span>
                <span className="text-gray-500 text-base">
                  {shippingOpen ? "▲" : "▼"}
                </span>
              </button>
              {shippingOpen && (
                <div className="mt-3 space-y-3">
                  {/* Country */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Country
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-amber-300 rounded-lg bg-white focus:outline-none focus:border-amber-500 text-gray-700">
                      <option value="BH">Bahrain</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="QA">Qatar</option>
                    </select>
                  </div>

                  {/* State/Province */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      State/Province
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm border border-amber-300 rounded-lg bg-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Zip/Postal Code */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Zip/Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm border border-amber-300 rounded-lg bg-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Standard Rate */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="radio"
                      name="shippingRate"
                      defaultChecked
                      className="mt-0.5 accent-blue-600"
                    />
                    <div>
                      <p className="text-xs font-semibold text-gray-700">
                        Standard Rate
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Price may vary depending on the item/destination. Shop
                        Staff will contact you.{" "}
                        <span className="font-semibold text-gray-700">
                          $21.00
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Discount Code */}
            <div className="border-b border-amber-200 pb-4 mb-5">
              <button
                className="flex items-center justify-between w-full text-sm font-semibold text-gray-800 hover:text-gray-900"
                onClick={() => setDiscountOpen(!discountOpen)}
              >
                <span>Apply Discount Code</span>
                <span className="text-gray-500 text-base">
                  {discountOpen ? "▲" : "▼"}
                </span>
              </button>
              {discountOpen && (
                <div className="mt-3 flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Enter Discount code"
                    className="w-full px-4 py-3 text-sm border border-amber-300 rounded-xl bg-white/60 focus:outline-none focus:border-amber-500 text-gray-600"
                  />
                  <button
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "50px",
                      border: "2px solid #089BC7",
                      background: "transparent",
                    }}
                    className="text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
                  >
                    <span
                      style={{
                        background:
                          "linear-gradient(90deg, #04447E 37.56%, #089BC7 64.25%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Apply Discount
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Subtotal</span>
                <span className="font-semibold">{fmt(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Shipping</span>
                <span className="font-semibold">{fmt(shipping)}</span>
              </div>
              <p className="text-xs text-gray-400 -mt-1 leading-tight">
                (Standard Rate - Price may vary depending on the
                item/destination. TECS Staff will contact you.)
              </p>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Tax</span>
                <span className="font-semibold">{fmt(tax)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span>GST (10%)</span>
                <span className="font-semibold">{fmt(gst)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-amber-200">
                <span>Order Total</span>
                <span>{fmt(orderTotal)}</span>
              </div>
            </div>

            {/* Proceed to Checkout */}
            <button
              onClick={() => router.push("/checkout")}
              className="w-full py-3.5 text-sm font-bold text-white rounded-xl transition-all hover:opacity-90 active:scale-[0.98] mb-3 bg-[#1B1B1B]"
              style={{
                borderRadius: "12px",
              }}
            >
              Proceed to Checkout
            </button>

            {/* PayPal */}
            <button className="w-full py-3 rounded-xl border border-yellow-400 bg-[#FFC439] hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 mb-4">
              <span className="text-sm font-semibold text-blue-900">
                Check out with
              </span>
              <span className="font-extrabold text-blue-900 italic text-base tracking-tight">
                Pay
              </span>
              <span className="font-extrabold text-blue-400 italic text-base tracking-tight">
                Pal
              </span>
            </button>

            {/* Zip */}
            <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
              <span className="font-bold text-green-600">🤐 zip</span>
              <span>|</span>
              <span>
                own it now, up to 6 months interest free{" "}
                <a href="#" className="text-blue-500 underline">
                  learn more
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
