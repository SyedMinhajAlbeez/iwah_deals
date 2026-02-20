"use client";
import { useAppSelector } from "@/store/hooks";
import CheckoutSkeleton from "../common/skeleton/CheckoutSkeleton";
import { CartSkeleton } from "../common/skeleton/ProductCartSkeleton";
import { useCartDetail } from "@/utils/hooks/useCartDetail";
import CheckoutCart from "./checkout-cart/CheckoutCart";
import Stepper from "./stepper";
import { useState, useEffect } from "react";
import { useAddressesFromApi } from "@utils/helper";
import { useScrollToTop } from "@/utils/hooks/useScrollTo";

interface CheckOutProps {
  step: string;
}

const CheckOut = ({ step }: CheckOutProps) => {
  const { isLoading } = useCartDetail();
  const { billingAddress, shippingAddress } = useAddressesFromApi();
  const cartDetail = useAppSelector((state) => state.cartDetail);
  const cartItems = cartDetail?.cart;
  const selectedShippingRate = cartItems?.selectedShippingRate;
  const selectedShippingRateTitle =
    cartItems?.selectedShippingRateTitle || cartItems?.selectedShippingRate;
  const selectedPayment = cartItems?.paymentMethod;
  const selectedPaymentTitle = cartItems?.paymentMethodTitle;
  const [isOpen, setIsOpen] = useState(!selectedPayment);
  useScrollToTop();

  useEffect(() => {
    if (selectedPayment) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(false);
    }
  }, [selectedPayment]);

  return (
    <>
      <section className="min-h-screen w-full bg-white">
        <div className="w-full border-0 lg:border-none">
          {isLoading ? (
            <CartSkeleton className="w-full" />
          ) : (
            <div className="w-full">
              <CheckoutCart
                cartItems={cartItems}
                selectedShippingRate={selectedShippingRate}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CheckOut;
