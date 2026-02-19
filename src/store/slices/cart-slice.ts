import { AddressDataTypes } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Cart {
  id: number;
  itemsQty: number;
  taxAmount: number;
  shippingAmount: number;
  grandTotal: number;
  items: any;
  paymentMethod: string;
  paymentMethodTitle: string;
  shippingMethod: string;
  selectedShippingRate: string;
  selectedShippingRateTitle: string;
}
export interface SelectedPayment {
  method: string;
  methodTitle?: string;
}


interface SelectedShippingRate {
  method: string;
  methodDescription?: string;
  methodPrice?: string;
}

// Define the shape of our cart state
interface CartState {
  cart?: Cart;
  selectedShippingRate: SelectedShippingRate | null;
  selectedPayment: SelectedPayment | null;
  billingAddress: AddressDataTypes | null;
  shippingAddress: AddressDataTypes | null;
  localItems: any[]; // For MVP
}
// Initial state for the cart
const initialState: CartState = {
  cart: undefined,
  selectedShippingRate: null,
  selectedPayment: null,
  billingAddress: null,
  shippingAddress: null,
  localItems: [],
};
const cartSlice = createSlice({
  name: "cartDetail",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Cart>) => {
      state.cart = { ...action.payload };
    },
    clearCart(state) {
      state.cart = undefined;
      state.billingAddress = null;
      state.shippingAddress = null;
      state.selectedShippingRate = null;
      state.selectedPayment = null;
    },

    /** ADDRESSES */
    setBillingAddress(
      state,
      action: PayloadAction<AddressDataTypes>
    ) {
      state.billingAddress = action.payload;
    },
    clearBillingAddress(state) {
      state.billingAddress = null;
    },

    setShippingAddress(
      state,
      action: PayloadAction<AddressDataTypes>
    ) {
      state.shippingAddress = action.payload;
    },
    clearShippingAddress(state) {
      state.shippingAddress = null;
    },

    setCheckoutAddresses(
      state,
      action: PayloadAction<{
        billing: AddressDataTypes;
        shipping: AddressDataTypes;
      }>
    ) {
      state.billingAddress = action.payload.billing;
      state.shippingAddress = action.payload.shipping;
    },

    /** SHIPPING */
    setSelectedShippingRate(
      state,
      action: PayloadAction<SelectedShippingRate>
    ) {
      state.selectedShippingRate = action.payload;
    },
    clearSelectedShipping(state) {
      state.selectedShippingRate = null;
    },

    /** PAYMENT */
    setSelectedPayment(state, action: PayloadAction<SelectedPayment>) {
      state.selectedPayment = action.payload;
    },
    clearSelectedPayment(state) {
      state.selectedPayment = null;
    },

    pushItem: (state, action: PayloadAction<any>) => {
      const existing = state.localItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.qty += action.payload.qty;
      } else {
        state.localItems.push(action.payload);
      }
    },
    removeLocalItem: (state, action: PayloadAction<string | number>) => {
      state.localItems = state.localItems.filter(item => item.id !== action.payload);
    },
    updateLocalQty: (state, action: PayloadAction<{ id: string | number; delta: number }>) => {
      const item = state.localItems.find(i => i.id === action.payload.id);
      if (item) {
        item.qty = Math.max(1, item.qty + action.payload.delta);
      }
    },
    clearLocalCart: (state) => {
      state.localItems = [];
    },
  },
});

// Export the actions (functions you call in components)
export const {
  addItem,
  clearCart,
  setSelectedShippingRate,
  setSelectedPayment,
  clearSelectedShipping,
  clearSelectedPayment,
  setBillingAddress,
  clearBillingAddress,
  setShippingAddress,
  clearShippingAddress,
  setCheckoutAddresses,
  pushItem,
  removeLocalItem,
  updateLocalQty,
  clearLocalCart,
} = cartSlice.actions;

// Export the reducer so the store can use it
export default cartSlice.reducer;
