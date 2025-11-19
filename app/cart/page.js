"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";
import QtyButton from "./QtyButtton";

export default function CartPage() {
  const { cart, updateQty, removeItem } = useCart();

  if (!cart.length) {
    return (
      <p className="text-gray-600 text-lg py-10 text-center">
        Your cart is empty.
      </p>
    );
  }

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-5">
        {cart.map((item) => {
          const isMinQty = item.qty === 1;

          return (
            <div
              key={item.id}
              className="flex items-center gap-5 border p-4 rounded-lg shadow-sm"
            >
              <Link href={`/products/${item.id}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-20 w-20 object-cover rounded-md"
                />
              </Link>
              <div className="flex-1">
                <Link href={`/products/${item.id}`}>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                </Link>
                <p className="text-gray-600">${item.price}</p>

                <div className="flex items-center gap-3 mt-2">
                  <QtyButton
                    disabled={isMinQty}
                    onClick={() => updateQty(item.id, "DECREMENT")}
                  >
                    -
                  </QtyButton>

                  <span className="min-w-6 text-center font-medium">
                    {item.qty}
                  </span>

                  <QtyButton onClick={() => updateQty(item.id, "INCREMENT")}>
                    +
                  </QtyButton>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 font-semibold hover:text-red-800 transition cursor-pointer"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end items-center gap-4 text-xl font-semibold">
        <span>Total:</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
}
