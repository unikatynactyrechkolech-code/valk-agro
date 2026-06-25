import { Metadata } from "next";
import { SHOP_PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";

export const metadata: Metadata = {
  title: "E-shop — LED svítidla pro stáje | Valk Agro",
  description:
    "Kupte Valk Agro Pro LED svítidla online. Délky 60, 120 nebo 150 cm, svítivost 4000K nebo 6000K. IP67, 25 W, 136 lm/W. Doprava zdarma od 5 000 Kč.",
};

export default function EshopPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-black/8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-[560px]">
            <h1
              className="font-syne font-black text-dirt leading-[0.88] mb-4"
              style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
            >
              E-shop.
            </h1>
            <p className="text-mist leading-relaxed">
              Valk Agro Pro LED svítidla skladem. Zvolte délku a svítivost —
              expedujeme do 3 pracovních dní.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-chalk py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Info bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
            <p className="font-tech text-[11px] tracking-[0.15em] uppercase text-mist/40">
              {SHOP_PRODUCTS.length} produkty · Vše skladem
            </p>
            <div className="flex flex-wrap gap-2">
              {["IP67", "25 W", "136 lm/W", "Záruka 5 let"].map((tag) => (
                <span
                  key={tag}
                  className="font-tech text-[10px] tracking-wide text-mist/50 border border-black/10 px-2.5 py-1 bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOP_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Shipping strip */}
          <div className="mt-10 bg-white border border-black/8 p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-8">
              {[
                ["Doprava zdarma", "od 5 000 Kč"],
                ["Expedice", "do 3 pracovních dní"],
                ["Vrácení zboží", "do 14 dní bez ptaní"],
              ].map(([label, val]) => (
                <div key={label}>
                  <p className="font-body font-semibold text-dirt text-sm">{label}</p>
                  <p className="font-tech text-[11px] text-mist/50">{val}</p>
                </div>
              ))}
            </div>
            <p className="font-tech text-[11px] text-mist/30 tracking-wide">
              Platba kartou · převodem · faktura
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
