"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((p) => p.id === product.id);

    if (exists) {
      setCart(
        cart.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (id, type) => {
    setCart(
      cart.map((p) =>
        p.id === id
          ? { ...p, qty: type === "inc" ? p.qty + 1 : Math.max(1, p.qty - 1) }
          : p
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
