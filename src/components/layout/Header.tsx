"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/produkty", label: "Produkty" },
  { href: "/eshop", label: "E-shop" },
  { href: "/reference", label: "Reference" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-syne font-black text-xl text-dirt tracking-tight group-hover:text-brand transition-colors">
            Valk<span className="text-brand"> Agro</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide uppercase transition-colors duration-150 ${
                pathname === link.href
                  ? "text-brand"
                  : "text-mist hover:text-dirt"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="font-tech text-sm text-mist hover:text-dirt transition-colors tracking-wide"
          >
            {COMPANY.phone}
          </a>
          {/* Cart icon */}
          <button
            onClick={openCart}
            aria-label="Košík"
            className="relative p-2 text-mist hover:text-dirt transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand text-dirt font-tech text-[9px] font-medium flex items-center justify-center">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>
          <Link
            href="/kontakt"
            className="bg-brand text-dirt font-body font-semibold text-xs px-5 py-2.5 uppercase tracking-wider hover:bg-[#9D8B36] transition-colors"
          >
            Poptávka
          </Link>
        </div>

        {/* Mobile: cart icon + burger */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={openCart}
            aria-label="Košík"
            className="relative p-2 text-mist hover:text-dirt transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-brand text-dirt font-tech text-[9px] font-medium flex items-center justify-center">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Navigace"
          >
            <span
              className={`block w-6 h-0.5 bg-dirt transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-dirt transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-dirt transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-black/10 px-6 py-6"
          >
            <nav className="flex flex-col gap-5 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-base uppercase tracking-wide ${
                    pathname === link.href ? "text-brand" : "text-dirt"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="font-tech text-sm text-mist block mb-4"
            >
              {COMPANY.phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-block bg-brand text-dirt font-body font-semibold text-xs px-6 py-3 uppercase tracking-wider hover:bg-[#9D8B36] transition-colors"
            >
              Poptávka
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
