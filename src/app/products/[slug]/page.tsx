import Link from "next/link";
import { products } from "@/data/products";

export default function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-gray-600">Product not found.</p>
        <Link href="/products" className="mt-3 inline-block hover:underline">
          Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 text-sm text-gray-600">
        <Link href="/products" className="hover:underline">
          Products
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.title}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border bg-white">
          <div className="aspect-[4/3]">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">{product.category}</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {product.title}
          </h1>

          <div className="flex items-end gap-3">
            <p className="text-2xl font-semibold">
              ${product.price.toFixed(2)}
            </p>
            {product.compareAtPrice && (
              <p className="text-sm text-gray-500 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </p>
            )}
            <p className="text-sm text-gray-500">⭐ {product.rating}</p>
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div className="flex gap-3 pt-2">
            <button className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90">
              Add to cart (static)
            </button>
            <Link
              href="/cart"
              className="rounded-xl border bg-white px-5 py-3 text-sm font-medium hover:bg-gray-50"
            >
              Go to cart
            </Link>
          </div>

          <div className="pt-6 text-sm text-gray-600">
            <p className="font-medium text-gray-900">Details</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Static UI only</li>
              <li>Later: connect to Sanity</li>
              <li>Later: cart state + checkout</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
