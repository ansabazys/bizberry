"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto overflow-hidden bg-[#f0eeeb] md:max-w-11/12">
        <div className="relative flex h-16 items-center justify-between px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            whileHover={{ y: -2 }}
            className="md:hidden"
          >
            <Link
              href="/"
              className="text-2xl font-medium leading-none tracking-tight text-[#941c1e]"
            >
              bizberry
            </Link>
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 text-sm text-[#941c1e]">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: 0.04 * index }}
                  whileHover={{ y: -2 }}
                >
                  <motion.div whileTap={{ scale: 0.97 }}>
                    <Link
                      href={item.href}
                      className={`transition hover:opacity-70 ${pathname === item.href ? "font-semibold" : ""}`}
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.08 }}
            whileHover={{ y: -2 }}
            className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          >
            <Link
              href="/"
              className="text-3xl leading-none font-medium tracking-tight text-[#941c1e]"
            >
              bizberry
            </Link>
          </motion.div>

          <div className="ml-auto hidden items-center gap-4 md:flex">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.08 }}
              whileHover={{ y: -2 }}
            >
              <Link
                href="/gallery"
                className="text-sm text-zinc-700 transition hover:text-[#941c1e]"
              >
                INSTAGRAM
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.08 }}
              whileHover={{ y: -2 }}
            >
              <Link
                href="/about"
                className="text-sm text-zinc-700 transition hover:text-[#941c1e]"
              >
                ABOUT
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((open) => !open)}
            className="md:hidden"
          >
            {isMobileOpen ? (
              <X color="#941c1e" size={22} />
            ) : (
              <Menu color="#941c1e" size={22} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto h-screen border border-t-0 border-zinc-300 bg-[#f0eeeb] px-6 py-10 shadow-[0_10px_20px_rgba(24,24,27,0.08)] md:max-w-11/12 md:hidden"
          >
            <nav className="text-center">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.03 * index }}
                    whileHover={{ y: -2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`text-lg tracking-wide text-[#941c1e] uppercase transition hover:opacity-70 ${
                        pathname === item.href ? "font-semibold" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 flex items-center justify-center gap-4 text-zinc-700">
                <Link
                  href="/gallery"
                  className="transition hover:text-[#941c1e]"
                >
                  FL
                </Link>
                <Link href="/about" className="transition hover:text-[#941c1e]">
                  X
                </Link>
                <Link
                  href="/contact"
                  className="transition hover:text-[#941c1e]"
                >
                  IG
                </Link>
              </div>

              <div className="mt-10">
                <Button
                  href="/contact"
                  size="sm"
                  className="rounded-md px-5"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Visit Us
                </Button>
              </div>

              <div className="mt-16 space-y-3 text-sm text-zinc-700">
                <p>PATTAMBI - KERALA</p>
                <p>10.00 AM - 10.30 PM</p>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
