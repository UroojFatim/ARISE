export type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  image: string; // for now use a normal URL
  category: string;
  rating: number; // 0-5
  description: string;
  badges?: string[];
};

export const products: Product[] = [
  {
    id: "p1",
    title: "AirFlex Running Shoes",
    slug: "airflex-running-shoes",
    price: 79.99,
    compareAtPrice: 99.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop",
    category: "Shoes",
    rating: 4.6,
    description:
      "Lightweight running shoes with breathable mesh and responsive cushioning.",
    badges: ["Bestseller", "20% OFF"],
  },
  {
    id: "p2",
    title: "Minimal Leather Backpack",
    slug: "minimal-leather-backpack",
    price: 129.0,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80&auto=format&fit=crop",
    category: "Bags",
    rating: 4.4,
    description:
      "Everyday backpack with premium leather finish and padded laptop sleeve.",
    badges: ["New"],
  },
  {
    id: "p3",
    title: "NoiseCancel Headphones Pro",
    slug: "noisecancel-headphones-pro",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1518441313421-2f3b9c9f96c1?w=1200&q=80&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.7,
    description:
      "Over-ear comfort with rich bass and active noise cancellation.",
    badges: ["Top Rated"],
  },
  {
    id: "p4",
    title: "Classic Cotton Hoodie",
    slug: "classic-cotton-hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1520975958225-9bcd0a5f3b1f?w=1200&q=80&auto=format&fit=crop",
    category: "Clothing",
    rating: 4.3,
    description:
      "Soft cotton hoodie with a relaxed fit — perfect for everyday wear.",
  },
];
