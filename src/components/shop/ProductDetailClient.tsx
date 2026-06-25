"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";
import { SHOP_PRODUCTS } from "@/lib/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedK, setSelectedK] = useState<"4000K" | "6000K">("4000K");
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();

  const variant = product.variants.find((v) => v.k === selectedK)!;
  const others = SHOP_PRODUCTS.filter((p) => p.id !== product.id);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: `${product.id}-${selectedK}`,
        productId: product.id,
        productName: product.name,
        length: product.length,
        k: selectedK,
        price: product.price,
        img: variant.img,
      });
    }
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2200);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-8 pb-0">
        <div className="flex items-center gap-2 font-tech text-[11px] tracking-wide text-mist/40 uppercase">
          <Link href="/produkty" className="hover:text-brand transition-colors">Produkty</Link>
          <span>/</span>
          <span className="text-mist/60">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — image */}
            <div className="relative bg-chalk aspect-square overflow-hidden">
              <Image
                src={variant.img}
                alt={`${product.name} ${selectedK}`}
                fill
                className="object-contain p-10 md:p-16 transition-all duration-500"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="font-tech text-[9px] tracking-[0.15em] uppercase bg-dirt text-brand px-2 py-1">IP67</span>
                <span className="font-tech text-[9px] tracking-[0.12em] uppercase bg-white text-mist border border-black/10 px-2 py-1">{product.watt} W</span>
              </div>
            </div>

            {/* Right — info */}
            <div className="flex flex-col gap-6 lg:pt-4">
              <div>
                <p className="font-tech text-[11px] tracking-[0.2em] uppercase text-brand mb-2">Valk Agro Pro LED</p>
                <h1
                  className="font-syne font-black text-dirt leading-[0.88] mb-4"
                  style={{ fontSize: "clamp(34px, 5vw, 58px)" }}
                >
                  {product.name}
                </h1>
                <p className="text-mist leading-relaxed">
                  Speciální svítidlo pro živočišnou výrobu. IP67, {product.watt} W, 136 lm/W.
                  Odolné vůči čpavku, vlhkosti a tlakové vodě.
                </p>
              </div>

              {/* Specs mini */}
              <div className="grid grid-cols-3 gap-px bg-black/8 border border-black/8">
                {[
                  ["Délka", product.length],
                  ["Příkon", `${product.watt} W`],
                  ["Životnost", "35–50k h"],
                ].map(([l, v]) => (
                  <div key={l} className="bg-chalk p-4">
                    <p className="font-tech text-[9px] tracking-[0.15em] uppercase text-mist/40 mb-1">{l}</p>
                    <p className="font-tech text-dirt text-base font-medium">{v}</p>
                  </div>
                ))}
              </div>

              {/* Variant selector */}
              <div>
                <p className="font-tech text-[10px] tracking-[0.2em] uppercase text-mist/40 mb-3">Svítivost</p>
                <div className="grid grid-cols-2 gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.k}
                      onClick={() => setSelectedK(v.k)}
                      className={`p-4 border text-left transition-all duration-150 ${
                        selectedK === v.k
                          ? "border-brand bg-brand/8 text-dirt"
                          : "border-black/10 text-mist hover:border-black/25 hover:text-dirt"
                      }`}
                    >
                      <span className="block font-syne font-black text-lg leading-tight">{v.k}</span>
                      <span className="block font-tech text-[11px] text-mist/50 mt-0.5">{v.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price + Add to cart */}
              <div className="border-t border-black/8 pt-6">
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <p
                      className="font-syne font-black text-dirt leading-none"
                      style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
                    >
                      {product.price.toLocaleString("cs-CZ")} Kč
                    </p>
                    <p className="font-tech text-[11px] text-mist/40 mt-1">bez DPH / ks</p>
                  </div>
                  {/* Qty */}
                  <div className="flex items-center border border-black/10">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="w-10 h-10 flex items-center justify-center text-mist hover:text-dirt transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/></svg>
                    </button>
                    <span className="w-10 text-center font-tech text-sm text-dirt select-none">{qty}</span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="w-10 h-10 flex items-center justify-center text-mist hover:text-dirt transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className={`w-full py-4 font-body font-semibold text-sm uppercase tracking-wider transition-all duration-200 ${
                    justAdded
                      ? "bg-[#2D7A45] text-white"
                      : "bg-brand text-dirt hover:bg-[#9D8B36]"
                  }`}
                >
                  {justAdded ? `✓ Přidáno do košíku` : `Do košíku — ${(product.price * qty).toLocaleString("cs-CZ")} Kč`}
                </button>

                <p className="text-center font-tech text-[10px] text-mist/30 tracking-wide mt-3">
                  Doprava zdarma od 5 000 Kč · Expedice do 3 dní
                </p>
              </div>

              {/* Záruka strip */}
              <div className="bg-brand/5 border border-brand/15 p-4 flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B5A040" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <p className="font-tech text-[11px] text-dirt tracking-wide">
                  Záruka 5 let · Výměna do 5 pracovních dní
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per-product description */}
      <section className="bg-chalk py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-[900px]">
            <div>
              <h2 className="font-syne font-black text-dirt leading-tight mb-5" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                {product.id === "valk-60" && "Kompakt pročíštěné prostory."}
                {product.id === "valk-120" && "Nejprodavanější model."}
                {product.id === "valk-150" && "Na velké haly."}
              </h2>
              <p className="text-dirt leading-relaxed text-base">
                {product.id === "valk-60" && "Nejmenší délka v naší řadě. Ideální pro porodnicy, menší haly nebo cílené osvětlení konkrétních míst. Stejná IP67 ochrana, stejná záruka, stejná odolnost — jen kompaktnější."}
                {product.id === "valk-120" && "Střední délka. Nejchodnější model v malých i velkých stajích. Skvnělý poměr světla a ceny, jednoduchá montáž, univerzální použití."}
                {product.id === "valk-150" && "Nejdelší svítidlo v nabídce. Měň svítidel na halu, více světla na m2. Volba chovatelů s velkokapacitmími stajemi a dlouhými řadami."}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {[
                ["Ideální pro", product.id === "valk-60" ? "Porodnicy, menší haly, cílené osvětlení" : product.id === "valk-120" ? "Standardní haly, univerzální použití" : "Velké haly, dlouhé řady, velkokapac. chov"],
                ["Ochrana", "IP67 — vodotěsné, odolné čpavku"],
                ["Záruka", "5 let bez výjimky"],
              ].map(([label, val]) => (
                <div key={label} className="border-l-2 border-brand pl-4">
                  <p className="font-tech text-[10px] text-mist/40 uppercase tracking-[0.15em] mb-1">{label}</p>
                  <p className="text-dirt font-body text-sm font-medium">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full specs table */}
      <section className="bg-chalk py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h2 className="font-syne font-black text-dirt leading-tight mb-8" style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}>
            Technická specifikace.
          </h2>
          <div className="max-w-[640px] divide-y divide-black/8 border border-black/8 bg-white">
            {[
              ["Krytí", "IP67 (IEC 60529)"],
              ["Příkon", `${product.watt} W ± 5 %`],
              ["Světelný tok", "3 400 lm"],
              ["Účinnost", "136 lm / W"],
              ["CRI", "> 80 Ra"],
              ["Teplota světla", selectedK === "4000K" ? "4 000 K (neutrální bílá)" : "6 000 K (studená bílá)"],
              ["Délka", product.length],
              ["Hmotnost", "550 g"],
              ["Provozní teplota", "-20 °C až +50 °C"],
              ["Materiál pouzdra", "Polykarbonát + hliník"],
              ["Životnost LED", "35 000–50 000 h (L70B10)"],
              ["Záruka", "5 let"],
            ].map(([label, val]) => (
              <div key={label} className="flex items-center justify-between px-5 py-3.5 gap-4">
                <span className="font-tech text-[11px] tracking-wide uppercase text-mist/40">{label}</span>
                <span className="font-tech text-sm text-dirt text-right">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other products */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h2 className="font-syne font-black text-dirt mb-8" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>
            Další délky.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((p) => (
              <Link
                key={p.id}
                href={`/produkty/${p.id}`}
                className="flex items-center gap-5 border border-black/10 p-5 hover:border-brand/30 transition-colors group bg-chalk"
              >
                <div className="relative w-8 h-20 shrink-0">
                  <Image src={p.variants[0].img} alt={p.name} fill className="object-contain" sizes="32px" />
                </div>
                <div className="flex-1">
                  <p className="font-syne font-black text-dirt text-base group-hover:text-brand transition-colors">{p.name}</p>
                  <p className="font-tech text-[11px] text-mist/50 mt-0.5">{p.length} · {p.watt} W</p>
                </div>
                <div className="text-right">
                  <p className="font-tech text-dirt text-sm font-medium">{p.price.toLocaleString("cs-CZ")} Kč</p>
                  <p className="font-tech text-[10px] text-mist/40">bez DPH</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
