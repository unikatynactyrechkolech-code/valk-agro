import { Metadata } from "next";
import Image from "next/image";
import { PRODUCT_SPECS, FAQ, COMPANY } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Valk Agro Pro LED — Technické parametry | Valk Agro",
  description: "Kompletní technická specifikace svítidla Valk Agro Pro LED. IP67, 3400 lm, 25 W, záruka 5 let.",
};

const BASE = "https://www.valk-agro.com/content/smush-webp/2024/08";

const variants = [
  { code: "30", len: "150 cm", k: "6000 K", type: "transparentní", w: "25 W", img: `${BASE}/balk-staand_30.png.webp` },
  { code: "31", len: "150 cm", k: "6000 K", type: "matný",         w: "25 W", img: `${BASE}/balk-staand_31.png.webp` },
  { code: "34", len: "150 cm", k: "4000 K", type: "transparentní", w: "25 W", img: `${BASE}/balk-staand_34.png.webp` },
  { code: "35", len: "150 cm", k: "4000 K", type: "matný",         w: "25 W", img: `${BASE}/balk-staand_35.png.webp` },
  { code: "20", len: "120 cm", k: "6000 K", type: "transparentní", w: "20 W", img: `${BASE}/balk-staand_20.png.webp` },
  { code: "21", len: "120 cm", k: "6000 K", type: "matný",         w: "20 W", img: `${BASE}/balk-staand_21.png.webp` },
  { code: "24", len: "120 cm", k: "4000 K", type: "transparentní", w: "20 W", img: `${BASE}/balk-staand_24.png.webp` },
  { code: "25", len: "120 cm", k: "4000 K", type: "matný",         w: "20 W", img: `${BASE}/balk-staand_25.png.webp` },
];

const features = [
  {
    title: "Žádná samostatná krytka",
    desc: "Speciální povlak přes celé svítidlo a malý průměr umožňují montáž svorkami přímo na zeď, strop nebo ocelový kabel — bez přídavného krytu.",
    img: "https://www.valk-agro.com/content/smush-webp/2024/08/f61317479b1dc165b4337eb21f6791c7.jpeg.webp",
  },
  {
    title: "Odolnost vůči čpavku a vlhkosti (IP67)",
    desc: "Svítidlo je zcela vodotěsné, odolné vůči čpavku a vlhkosti. Lze čistit tlakovým čističem bez rizika poškození.",
    img: "https://www.valk-agro.com/content/smush-webp/2024/08/f63d61ee02204305871333ac4d6f3494.jpeg.webp",
  },
  {
    title: "3× delší životnost než zářivka",
    desc: "LED technologie a robustní konstrukce, která brání vstupu vlhkosti a čpavku, zajišťuje 3× delší životnost než klasická zářivka.",
    img: "https://www.valk-agro.com/content/smush-webp/2024/08/571c59c235d0e6eb9c73b97ea1d22748.jpeg.webp",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-black/10 py-5">
      <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
        <span className="font-body font-semibold text-dirt text-base">{q}</span>
        <span className="shrink-0 w-6 h-6 border border-black/15 flex items-center justify-center text-mist group-open:border-brand/40 group-open:text-brand transition-colors">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-45">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </summary>
      <p className="mt-4 text-mist text-sm leading-relaxed pr-10">{a}</p>
    </details>
  );
}

export default function ProduktyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden py-24 md:py-36">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #B5A040 0%, transparent 70%)", opacity: 0.08 }} />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-syne font-black text-dirt leading-[0.88] mb-5"
                style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
                Technické<br />parametry.
              </h1>
              <p className="text-mist max-w-[480px] leading-relaxed mb-10">
              Svítidlo navržené pro nejhorší podmínky. Čpavek, prach, tlak vody, koroze —
                všechno jsme testovali. IP67 není marketing, je to standard co splníme.
              </p>
              <Button variant="primary" href="/kontakt" size="lg">Poptávka zdarma</Button>
            </div>
            {/* Product bar photo */}
            <div className="relative aspect-[3/1] lg:aspect-auto lg:h-48">
              <Image
                src="https://www.valk-agro.com/content/smush-webp/2024/09/bar-e1724759986653-long-1.png.webp"
                alt="Valk Agro Pro LED svítidlo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs grid */}
      <section className="bg-chalk py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/8 border border-black/10">
            {PRODUCT_SPECS.map((spec, i) => (
              <div key={i} className="bg-chalk p-6 md:p-8 hover:bg-white transition-colors duration-200">
                <p className="font-tech text-[10px] tracking-[0.15em] uppercase text-mist/40 mb-2">{spec.label}</p>
                <p className="font-tech text-dirt text-2xl md:text-3xl font-medium leading-none">{spec.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 border border-black/10 flex flex-wrap gap-4 items-center">
            <span className="font-tech text-[10px] tracking-[0.2em] uppercase text-mist/50 mr-2">Certifikace:</span>
            {["IEC 60529 (IP67)", "EN 62493", "CE", "RoHS 3"].map((c) => (
              <span key={c} className="font-tech text-xs text-mist border border-black/10 px-3 py-1.5 tracking-wide">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features with photos */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-16">
            {features.map((f, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="font-syne font-black text-dirt text-xl md:text-2xl leading-tight mb-4">{f.title}</h3>
                  <p className="text-mist leading-relaxed">{f.desc}</p>
                </div>
                <div className={`relative aspect-[4/3] overflow-hidden border border-black/10 ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <Image src={f.img} alt={f.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="bg-chalk py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h2 className="font-syne font-black text-dirt leading-[0.88] mb-10"
            style={{ fontSize: "clamp(34px, 4.5vw, 64px)" }}>
            Dostupné provedení.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {variants.map((v) => (
              <div key={v.code} className="bg-white border border-black/10 p-5 hover:border-brand/20 transition-colors group">
                <div className="relative aspect-[1/4] mb-4">
                  <Image src={v.img} alt={`Valk Agro Pro ${v.code}`} fill className="object-contain" sizes="200px" />
                </div>
                <p className="font-tech text-brand text-xs tracking-[0.15em] uppercase mb-1">Pro {v.code}</p>
                <p className="font-tech text-dirt text-sm">{v.len} · {v.k}</p>
                <p className="font-tech text-mist/50 text-xs mt-0.5">{v.type} · {v.w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed specs + installation */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="divide-y divide-black/10">
                {[
                  ["Model", "Valk Agro Pro LED 25"],
                  ["Kytí", "IP67 (IEC 60529)"],
                  ["Příkon", "25 W ± 5 %"],
                  ["Světelný tok", "3 400 lm"],
                  ["Učinnost", "136 lm / W"],
                  ["CRI", "> 80 Ra"],
                  ["Teplota světla", "4 000–6 000 K"],
                  ["Faktor výkonu", "> 0,95"],
                  ["THD", "< 15 %"],
                  ["Rozměry", "1 250 × 82 × 55 mm"],
                  ["Hmotnost", "550 g"],
                  ["Provozní teplota", "-20 °C až +50 °C"],
                  ["Materiál pouzdra", "Polykarbonát + hliník"],
                  ["Životnost LED", "35 000–50 000 h (L70B10)"],
                  ["Záruka", "5 let"],
                ].map(([label, val], i) => (
                  <div key={i} className="flex items-center justify-between py-3 gap-4">
                    <span className="font-tech text-[11px] tracking-wide uppercase text-mist/50">{label}</span>
                    <span className="font-tech text-sm text-dirt text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-6 mb-10">
                {[
                  ["01", "Zavolejte nebo pošlete poptávku", "Řeknete nám počet svítidel a velikost stáje. Do 24 hodin dostanete konkrétní nabídku."],
                  ["02", "Dodávka na místo", "Svítidla dodáme přímo na farmu. Balení je navrženo pro pohodlnou manipulaci."],
                  ["03", "Montáž elektrikářem", "Svítidla se montují jako standardní retrofit. Váš elektrikář nebo naše doporučená firma. Hala 100 ks zvládnuta za jeden den."],
                  ["04", "Servis a záruka", "5 let bez otázek. Vadné svítidlo vyměníme do 5 pracovních dní po hlášení závady."],
                ].map(([num, title, desc]) => (
                  <div key={num} className="flex gap-5">
                    <div className="shrink-0 w-9 h-9 border border-brand/30 flex items-center justify-center">
                      <span className="font-tech text-brand text-xs font-medium">{num}</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-dirt text-sm mb-1">{title}</h4>
                      <p className="text-mist text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-brand/20 p-6">
                <p className="font-body font-semibold text-dirt mb-2">Chcete vzorové svítidlo?</p>
                <p className="text-mist text-sm mb-4 leading-relaxed">Pošleme vám testovací kus do 5 pracovních dní. Sami si ověřte kvalitu.</p>
                <Button variant="primary" href="/kontakt">Vzorový kus zdarma</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-chalk py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="font-syne font-black text-dirt leading-[0.88] mb-10"
            style={{ fontSize: "clamp(34px, 4.5vw, 64px)" }}>
            Odpovědi na to,<br />co se ptají ostatní.
          </h2>
          {FAQ.map((item, i) => <FaqItem key={i} q={item.question} a={item.answer} />)}
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <span className="text-mist text-sm">Máte jinou otázku?</span>
            <Button variant="ghost" href="/kontakt">Napište nám →</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
