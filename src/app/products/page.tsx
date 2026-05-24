import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <p className="mt-1 text-sm text-gray-600">
          Static data for now — we’ll replace with Sanity later.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </main>
  );
}
