import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition flex flex-col group bg-white">
      <Link href={`/products/${product.id}`} className="grow">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 w-full object-cover rounded-md group-hover:opacity-90 transition"
        />
        <h2 className="font-semibold text-lg mt-3 line-clamp-1">
          {product.title}
        </h2>
        <p className="text-gray-600 mt-1">${product.price}</p>
      </Link>
      <div className="mt-4">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
