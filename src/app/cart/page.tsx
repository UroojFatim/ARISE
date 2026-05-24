import Link from "next/link";

export default function CartPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Cart</h1>
      <p className="mt-2 text-sm text-gray-600">
        This is static for now. Next step: add cart state (Context/Zustand).
      </p>

      <div className="mt-6 rounded-2xl border bg-white p-6">
        <p className="text-gray-700">Your cart is empty (static).</p>
        <Link
          href="/products"
          className="mt-4 inline-flex rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Browse products
        </Link>
      </div>
    </main>
  );
}
