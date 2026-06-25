"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const [selectedK, setSelectedK] = useState<"4000K" | "6000K">("4000K");
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();

  const variant = product.variants.find((v) => v.k === selectedK)!;

  const handleAdd = () => {
    addItem({
      id: `${product.id}-${selectedK}`,
      productId: product.id,
      productName: product.name,
      length: product.length,
      k: selectedK,
      price: product.price,
      img: variant.img,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <article className="group bg-white border border-black/10 hover:border-brand/25 transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div className="relative bg-chalk overflow-hidden" style={{ paddingBottom: "95%" }}>
        <Image
          src={variant.img}
          alt={`${product.name} ${selectedK}`}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="font-tech text-[9px] tracking-[0.15em] uppercase bg-dirt text-brand px-2 py-1">
            IP67
          </span>
          <span className="font-tech text-[9px] tracking-[0.12em] uppercase bg-white/80 text-mist border border-black/10 px-2 py-1">
            {product.watt} W
          </span>
        </div>
        {/* Length */}
        <div className="absolute top-3 right-3">
          <span className="font-syne font-black text-dirt text-sm bg-white/90 px-2 py-0.5 backdrop-blur-sm">
            {product.length}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="font-syne font-black text-dirt text-lg leading-tight">
            {product.name}
          </h3>
          <p className="font-tech text-[11px] tracking-[0.08em] text-dirt mt-1">
            136 lm/W · 5 let záruka · 35–50k h
          </p>
        </div>

        {/* Variant selector */}
        <div>
          <p className="font-tech text-[10px] tracking-[0.15em] uppercase text-mist/40 mb-2">
            Svítivost
          </p>
          <div className="flex gap-2">
            {product.variants.map((v) => (
              <button
                key={v.k}
                onClick={() => setSelectedK(v.k)}
                className={`flex-1 text-center py-2.5 px-2 border text-xs font-tech tracking-wide transition-all duration-150 ${
                  selectedK === v.k
                    ? "border-brand bg-brand/10 text-dirt"
                    : "border-black/10 text-mist hover:border-black/25 hover:text-dirt"
                }`}
              >
                <span className="block font-semibold">{v.k}</span>
                <span className="block text-[10px] opacity-60 mt-0.5 font-normal tracking-normal">
                  {v.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-1 border-t border-black/8">
          <div className="pt-3">
            <p
              className="font-syne font-black text-dirt leading-none"
              style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
            >
              {product.price.toLocaleString("cs-CZ")} Kč
            </p>
            <p className="font-tech text-[10px] text-mist/40 mt-1 tracking-wide">
              bez DPH / ks
            </p>
          </div>
          <button
            onClick={handleAdd}
            className={`shrink-0 px-5 py-3 font-body font-semibold text-xs uppercase tracking-wider transition-all duration-200 mb-0 ${
              justAdded
                ? "bg-[#2D7A45] text-white"
                : "bg-brand text-dirt hover:bg-[#9D8B36]"
            }`}
          >
            {justAdded ? "✓ Přidáno" : "Do košíku"}
          </button>
        </div>
      </div>
    </article>
  );
}
