"use client";

import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Cart() {
  const { items, isOpen, closeCart, removeItem, setQty, totalPrice, totalItems } = useCart();

  const FREE_SHIPPING = 5000;
  const remaining = Math.max(0, FREE_SHIPPING - totalPrice);
  const progress = Math.min(100, (totalPrice / FREE_SHIPPING) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px]"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            key="cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-[420px] bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/8">
              <p className="font-syne font-black text-dirt text-lg">
                Košík
                {totalItems > 0 && (
                  <span className="ml-2 font-tech text-sm text-mist/40 font-normal">
                    · {totalItems} ks
                  </span>
                )}
              </p>
              <button
                onClick={closeCart}
                aria-label="Zavřít košík"
                className="w-8 h-8 flex items-center justify-center text-mist hover:text-dirt transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Free shipping progress */}
            {totalPrice > 0 && (
              <div className="px-6 py-3 bg-chalk border-b border-black/8">
                {remaining === 0 ? (
                  <p className="font-tech text-[11px] tracking-wide text-brand">
                    ✓ Máte dopravu zdarma!
                  </p>
                ) : (
                  <>
                    <p className="font-tech text-[11px] tracking-wide text-mist/60 mb-1.5">
                      Ještě {remaining.toLocaleString("cs-CZ")} Kč do dopravy zdarma
                    </p>
                    <div className="h-0.5 bg-black/8 overflow-hidden">
                      <div
                        className="h-full bg-brand transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 px-8 text-center">
                  <div className="w-16 h-16 border border-black/10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-mist/30">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                  </div>
                  <p className="text-mist text-sm">Košík je zatím prázdný.</p>
                </div>
              ) : (
                <ul className="divide-y divide-black/8">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4 px-6 py-5">
                      <div className="relative w-10 h-20 shrink-0 bg-chalk">
                        <Image
                          src={item.img}
                          alt={item.productName}
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-body font-semibold text-dirt text-sm leading-snug">
                              {item.productName}
                            </p>
                            <p className="font-tech text-[11px] text-mist/50 mt-0.5">
                              {item.length} · {item.k}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label="Odebrat položku"
                            className="text-mist/30 hover:text-dirt transition-colors shrink-0 mt-0.5"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          {/* Qty controls */}
                          <div className="flex items-center border border-black/10">
                            <button
                              onClick={() => setQty(item.id, item.qty - 1)}
                              aria-label="Odebrat kus"
                              className="w-7 h-7 flex items-center justify-center text-mist hover:text-dirt transition-colors"
                            >
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14" />
                              </svg>
                            </button>
                            <span className="w-8 text-center font-tech text-sm text-dirt select-none">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => setQty(item.id, item.qty + 1)}
                              aria-label="Přidat kus"
                              className="w-7 h-7 flex items-center justify-center text-mist hover:text-dirt transition-colors"
                            >
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M12 5v14M5 12h14" />
                              </svg>
                            </button>
                          </div>
                          <span className="font-tech text-dirt text-sm font-medium">
                            {(item.price * item.qty).toLocaleString("cs-CZ")} Kč
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-black/8 px-6 py-6 flex flex-col gap-3">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-mist text-sm">Celkem bez DPH</span>
                  <span
                    className="font-syne font-black text-dirt"
                    style={{ fontSize: "clamp(22px, 3vw, 28px)" }}
                  >
                    {totalPrice.toLocaleString("cs-CZ")} Kč
                  </span>
                </div>
                <button className="w-full bg-brand text-dirt font-body font-semibold text-sm uppercase tracking-wider py-4 hover:bg-[#9D8B36] transition-colors">
                  Přejít k pokladně
                </button>
                <p className="text-center text-mist/30 font-tech text-[10px] tracking-wide">
                  Bezpečná platba · Faktura ihned
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
