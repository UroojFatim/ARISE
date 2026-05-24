"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-82px)] bg-black text-white">
      {/* Optional subtle vignette/gradient to look premium */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-82px)] max-w-6xl items-center justify-center px-4">
        <div className="text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto text-4xl font-bold tracking-[0.18em] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            ARISE COLLECTION
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-sm text-white/85 sm:text-base md:text-lg"
          >
            Discover the perfect blend of modern elegance and traditional grace
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center border border-white bg-white px-10 py-3 text-sm font-medium text-black transition
                         hover:bg-black hover:text-white active:scale-[0.98]"
            >
              <span className="transition group-hover:tracking-wide">Shop Now</span>
            </Link>
          </motion.div>

          {/* Small extra motion detail (optional): subtle floating line */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mx-auto mt-14 h-px w-24 bg-white/35"
          />
        </div>
      </div>
    </section>
  );
}
