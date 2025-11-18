import AddToCartButton from "../AddToCartButton";

async function getProduct(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) throw new Error("Product not found");
    return res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default async function ProductDetail({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-60 text-gray-500">
        Failed to load product. Please try again.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <p className="text-3xl font-semibold text-blue-600 mb-6">
            ${product.price}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
