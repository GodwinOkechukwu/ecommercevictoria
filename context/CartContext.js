"use client";
import { createContext, useContext } from "react";
export const CartContext = createContext({
  amount: 0,
  decrease: () => {},
  increase: () => {},
  cart: false,
  setCartState: () => {},
  closeCart: () => {},
});

export const CartProvider = CartContext.Provider;

export default function useCart() {
  return useContext(CartContext);
}
