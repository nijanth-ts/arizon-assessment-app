"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        E-Store
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden px-3 py-2 border rounded"
      >
        ☰
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:block relative group">
        <button className="px-4 py-2 font-semibold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          Menu
        </button>

        <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 w-60 z-10">
          <ul className="space-y-2 z-20">
            <li>
              <Link href="/products" className="hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-blue-600">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Link href="/cart" className="relative hidden md:block">
        <span className="text-2xl">🛒</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
      </Link>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden z-20">
          <ul className="space-y-4 text-lg">
            <li>
              <Link href="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" onClick={() => setMenuOpen(false)}>
                Cart
              </Link>
            </li>
          </ul>

          <Link href="/cart" className="flex items-center gap-2 mt-4">
            <span className="text-2xl">🛒</span>
            {totalItems > 0 && (
              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}
