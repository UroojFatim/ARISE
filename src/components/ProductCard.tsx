import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ p }: { p: Product }) {
  const discount =
    p.compareAtPrice && p.compareAtPrice > p.price
      ? Math.round(((p.compareAtPrice - p.price) / p.compareAtPrice) * 100)
      : null;

  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/products/${p.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {p.badges?.map((b) => (
              <span
                key={b}
                className="rounded-full bg-black/80 px-2 py-1 text-xs text-white"
              >
                {b}
              </span>
            ))}
            {discount !== null && (
              <span className="rounded-full bg-emerald-600 px-2 py-1 text-xs text-white">
                -{discount}%
              </span>
            )}
          </div>
        </div>

        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs text-gray-500">{p.category}</p>
              <h3 className="line-clamp-1 font-medium">{p.title}</h3>
            </div>
            <div className="text-right">
              <p className="font-semibold">${p.price.toFixed(2)}</p>
              {p.compareAtPrice && (
                <p className="text-xs text-gray-500 line-through">
                  ${p.compareAtPrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>

          <div className="flex items-center justify-between pt-1">
            <p className="text-xs text-gray-500">⭐ {p.rating}</p>
            <span className="text-sm font-medium text-black underline-offset-4 group-hover:underline">
              View
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
