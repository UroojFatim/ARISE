"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay: 0.08 * i },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const shopLinks = [
  { label: "New Arrivals", href: "/products?tag=new" },
  { label: "Best Sellers", href: "/products?tag=best" },
  { label: "Casual Wear", href: "/products?cat=casual" },
  { label: "Formal Wear", href: "/products?cat=formal" },
  { label: "Traditional Wear", href: "/products?cat=traditional" },
];

const serviceLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Shipping Information", href: "/shipping" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Track Order", href: "/track-order" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Ambient animated glow background */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12), rgba(255,255,255,0) 60%)",
        }}
        animate={{ y: [0, 18, 0], opacity: [0.65, 0.9, 0.65] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.10), rgba(255,255,255,0) 60%)",
        }}
        animate={{ y: [0, -16, 0], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="mx-auto max-w-7xl px-4 pt-14 md:pt-16">
        {/* Top grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} custom={0}>
            <motion.h3
              className="text-2xl font-semibold tracking-[0.22em]"
              initial={{ opacity: 0, letterSpacing: "0.10em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              ARISE
            </motion.h3>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/75">
              Your destination for modern and traditional women&apos;s fashion.
            </p>
          </motion.div>

          {/* Shop */}
          <motion.div variants={fadeUp} custom={1}>
            <FooterTitle>Shop</FooterTitle>
            <ul className="mt-5 space-y-3">
              {shopLinks.map((l, idx) => (
                <li key={l.href}>
                  <AnimatedFooterLink href={l.href} delay={idx * 0.02}>
                    {l.label}
                  </AnimatedFooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={fadeUp} custom={2}>
            <FooterTitle>Customer Service</FooterTitle>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((l, idx) => (
                <li key={l.href}>
                  <AnimatedFooterLink href={l.href} delay={idx * 0.02}>
                    {l.label}
                  </AnimatedFooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stay Connected */}
          <motion.div variants={fadeUp} custom={3}>
            <FooterTitle>Stay Connected</FooterTitle>
            <p className="mt-5 text-sm leading-6 text-white/75">
              Subscribe to get special offers and updates.
            </p>

            {/* Email input */}
            <motion.form
              className="mt-6"
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-md bg-white px-4 py-3 pr-12 text-sm text-black outline-none ring-1 ring-black/10 transition
                             focus:ring-2 focus:ring-white/70"
                />

                {/* Animated send icon */}
                <motion.button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-black"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-5 w-5" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.form>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-5">
              <MagneticIcon label="Facebook" href="#">
                <FacebookIcon />
              </MagneticIcon>
              <MagneticIcon label="Instagram" href="#">
                <InstagramIcon />
              </MagneticIcon>
              <MagneticIcon label="Twitter" href="#">
                <TwitterIcon />
              </MagneticIcon>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider line */}
        <motion.div
          className="mt-14 h-px w-full bg-white/15"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-10 text-sm text-white/75 md:flex-row md:items-center md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            © {new Date().getFullYear()} ARISE. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          >
            <AnimatedFooterLink href="/privacy" delay={0}>
              Privacy Policy
            </AnimatedFooterLink>
            <AnimatedFooterLink href="/terms" delay={0.02}>
              Terms of Service
            </AnimatedFooterLink>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-semibold tracking-wide text-white">
      {children}
    </h4>
  );
}

function AnimatedFooterLink({
  href,
  children,
  delay,
}: {
  href: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className="w-fit"
    >
      <Link
        href={href}
        className="group relative inline-block text-sm text-white/75 transition hover:text-white"
      >
        {/* hover underline animation */}
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition duration-300 group-hover:scale-x-100" />
        </span>
      </Link>
    </motion.div>
  );
}

/** Magnetic + bounce icon hover */
function MagneticIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15"
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -2, 0] }}
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* glow pulse on hover */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          boxShadow: "0 0 0 8px rgba(255,255,255,0.06)",
        }}
      />
      <motion.div
        whileHover={{ rotate: [0, -6, 6, 0] }}
        transition={{ duration: 0.45 }}
        className="text-white"
      >
        {children}
      </motion.div>
    </motion.a>
  );
}

/** Simple inline icons to match screenshot style */
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M18.9 2H22l-6.8 7.8L23 22h-6.8l-5.3-6.7L4.9 22H2l7.4-8.5L1 2h7l4.8 6.1L18.9 2Zm-1.2 18h1.9L7 3.8H5L17.7 20Z"
        fill="currentColor"
      />
    </svg>
  );
}
