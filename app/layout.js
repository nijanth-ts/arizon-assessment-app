import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <Toaster position="top-right" />
          <main className="p-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
