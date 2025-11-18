"use client";

import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <button
      onClick={handleAdd}
      className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition cursor-pointer w-full"
    >
      Add to Cart
    </button>
  );
}
