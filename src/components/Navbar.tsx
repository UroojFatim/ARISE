"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { label: "All", href: "/products" },
  { label: "New Arrivals", href: "/products?tag=new" },
  { label: "Best Sellers", href: "/products?tag=best" },
  { label: "Casual Wear", href: "/products?cat=casual" },
  { label: "Formal Wear", href: "/products?cat=formal" },
  { label: "Fancy / Party Wear", href: "/products?cat=party" },
  { label: "Traditional Wear", href: "/products?cat=traditional" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isProductsRoute = pathname.startsWith("/products");

  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu open (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const nav = useMemo(() => NAV_ITEMS, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      {/* Subtle moving highlight line */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-80"
        initial={{ backgroundPositionX: "0%" }}
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0) 70%)",
          backgroundSize: "200% 100%",
        }}
      />

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left: Brand */}
          <Link href="/" className="relative inline-flex items-center">
            <motion.span
              className="text-2xl font-semibold tracking-[0.22em] text-black"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              ARISE
            </motion.span>

            {/* Logo shimmer sweep */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -inset-y-2 -left-6 w-10 rotate-12 bg-black/10 blur-md"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: [ -30, 120 ], opacity: [0, 0.25, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8 }}
            />
          </Link>

          {/* Center: Nav (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => {
              const active = item.label === "All" ? isProductsRoute : false;
              return (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={active}
                />
              );
            })}
          </nav>

          {/* Right: Icons + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <IconButton ariaLabel="Search">
              <Search className="h-5 w-5" />
            </IconButton>

            <Link href="/cart" aria-label="Cart">
              <motion.span
                className="relative inline-flex rounded-full p-2"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.94 }}
              >
                <span className="absolute inset-0 rounded-full opacity-0 transition group-hover:opacity-100" />
                <ShoppingBag className="h-5 w-5" />
                {/* tiny ping dot (optional) */}
                <motion.span
                  className="absolute right-[6px] top-[6px] h-2 w-2 rounded-full bg-black"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.span>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden ml-1 inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
              onClick={() => setOpen((s) => !s)}
              whileTap={{ scale: 0.92 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0, scale: 0.9 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.9 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Thick black line (like screenshot) */}
      <div className="h-[2px] w-full bg-black" />

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 md:hidden bg-black/20"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.div
              className="md:hidden absolute left-0 right-0 z-50 bg-white"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
            >
              <div className="mx-auto max-w-7xl px-4 py-4">
                <motion.div
                  className="grid gap-2"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.06, delayChildren: 0.04 },
                    },
                  }}
                >
                  {nav.map((item) => {
                    const active = item.label === "All" ? isProductsRoute : false;
                    return (
                      <MobileNavItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        active={active}
                        onClick={() => setOpen(false)}
                      />
                    );
                  })}
                </motion.div>

                {/* little bottom flourish */}
                <motion.div
                  className="mt-4 h-[1px] w-full bg-black/10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <motion.button
      aria-label={ariaLabel}
      className="group relative inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.94 }}
    >
      {/* soft ripple ring */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.18 }}
      />
      {children}
    </motion.button>
  );
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link href={href} className="relative">
      <motion.span
        className="relative inline-block text-sm font-semibold text-black"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 520, damping: 28 }}
      >
        {label}

        {/* Active underline indicator */}
        <AnimatePresence>
          {active && (
            <motion.span
              layoutId="nav-underline"
              className="absolute left-0 top-[130%] h-[2px] w-full bg-black"
              initial={{ opacity: 0, y: -2, scaleX: 0.6 }}
              animate={{ opacity: 1, y: 0, scaleX: 1 }}
              exit={{ opacity: 0, y: -2, scaleX: 0.6 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{ transformOrigin: "left" }}
            />
          )}
        </AnimatePresence>
      </motion.span>

      {/* Hover underline (non-active) */}
      {!active && (
        <motion.span
          className="absolute left-0 top-[130%] h-[2px] w-full origin-left scale-x-0 bg-black"
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.18 }}
        />
      )}

      {/* Soft hover glow */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-x-2 -inset-y-3 rounded-xl bg-black/5 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.18 }}
      />
    </Link>
  );
}

function MobileNavItem({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -6 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-black hover:bg-gray-100"
      >
        <span className="flex items-center gap-3">
          {/* leading dot / indicator */}
          <motion.span
            className="h-2 w-2 rounded-full bg-black"
            animate={active ? { scale: [1, 1.4, 1] } : { scale: 1 }}
            transition={active ? { duration: 0.9, repeat: Infinity } : { duration: 0.2 }}
          />
          {label}
        </span>

        {active && (
          <motion.span
            className="h-[2px] w-10 bg-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.25 }}
            style={{ transformOrigin: "left" }}
          />
        )}
      </Link>
    </motion.div>
  );
}
