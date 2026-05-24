"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Casual Wear",
    href: "/products?cat=casual",
    image:
      "https://images.unsplash.com/photo-1520975591210-0f24b6d9bcb5?w=1400&q=80&auto=format&fit=crop",
  },
  {
    title: "Formal Wear",
    href: "/products?cat=formal",
    image:
      "https://images.unsplash.com/photo-1520975681621-5c2dcfe0f9d2?w=1400&q=80&auto=format&fit=crop",
  },
  {
    title: "Party Wear",
    href: "/products?cat=party",
    image:
      "https://images.unsplash.com/photo-1520975661599-5d77dd1c9d1f?w=1400&q=80&auto=format&fit=crop",
  },
  {
    title: "Traditional Wear",
    href: "/products?cat=traditional",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&q=80&auto=format&fit=crop",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function FeaturedCollections() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-2xl font-medium tracking-wide text-black md:text-3xl"
        >
          Featured Collections
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {collections.map((c, idx) => (
            <CollectionCard key={c.title} c={c} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CollectionCard({
  c,
  idx,
}: {
  c: { title: string; href: string; image: string };
  idx: number;
}) {
  return (
    <motion.div
      variants ={item}
      className="group"
      // continuous subtle “floating” animation (different phase per card)
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: idx * 0.25,
      }}
    >
      <Link href={c.href} className="block">
        {/* Image frame */}
        <div className="relative overflow-hidden rounded-sm bg-gray-100">
          {/* Image */}
          <motion.img
            src={c.image}
            alt={c.title}
            className="h-64 w-full object-cover sm:h-72 lg:h-72"
            // hover zoom
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />

          {/* Subtle border like catalog tiles */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10 group-hover:ring-black/20 transition" />
        </div>

        {/* Label */}
        <motion.p
          className="mt-5 text-center text-lg font-semibold text-black"
          whileHover={{ letterSpacing: "0.04em" }}
          transition={{ duration: 0.25 }}
        >
          {c.title}
        </motion.p>
      </Link>
    </motion.div>
  );
}
