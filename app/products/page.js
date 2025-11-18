import ProductCard from "./ProductCard";

export async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (error) {
    console.error("Product Fetch Error:", error);
    return { products: [] };
  }
}

export default async function ProductsPage() {
  const data = await getProducts();

  if (!data?.products?.length) {
    return (
      <div className="p-10 text-center text-gray-600 text-xl">
        No products available!
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
