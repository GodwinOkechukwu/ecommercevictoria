"use client";
import CartCard from "@/components/CartCard";
import Company from "@/components/Company";
import Navbar from "@/components/Navbar";
import Slide from "@/components/Slide";
import { CartProvider } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function Home() {
  let [amount, setAmount] = useState(0);
  const [cart, setCart] = useState(false);
  const decrease = () => {
    if (amount > 0) {
      setAmount(amount--);
    } else if (amount === 0) {
      setAmount(0);
    } else {
      null;
    }
  };
  const increase = () => {
    setAmount(amount++);
  };

  const setCartState = () => {
    setCart(true);
  };

  const closeCart = () => {
    setCart(false);
  };

  // useEffect(() => {}, [amount]);
  return (
    <CartProvider
      value={{ amount, decrease, increase, cart, setCartState, closeCart }}>
      <Navbar />
      <div className="lg:flex lg:mt-8">
        <Slide />
        <Company />
      </div>
      <CartCard />
    </CartProvider>
  );
}
