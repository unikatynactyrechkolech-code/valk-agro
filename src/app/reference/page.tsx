import { Metadata } from "next";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Reference — Realizace Valk Agro | Valk Agro",
  description:
    "Realizace Valk Agro LED osvětlení v prasečích stájích po celé České republice. Skutečné zkušenosti chovatelů.",
};

const references = [
  {
    name: "Výkrm prasat — Jihomoravský kraj",
    location: "Jihomoravský kraj, CZ",
    count: "320 ks svítidel",
    halls: "4 výkrmové haly",
    year: "2023",
    quote: "Neváhal jsem ani sekundu namířit tlakový čistič přímo na svítidlo. Vypadají robustně a opravdu jsou vodotěsná.",
    author: "Jan Novák",
    img: "https://www.valk-agro.com/content/smush-webp/2024/09/Valk-Agro-LED-VarkensWanroij-18-130.jpg.webp",
  },
  {
    name: "Prasečí stáj — Vysočina",
    location: "Vysočina, CZ",
    count: "180 ks svítidel",
    halls: "2 haly, porodna + odchovna",
    year: "2022",
    quote: "Měl jsem předtím klasické zářivky. Každou zimu jedna nebo dvě praskly. Teď mám klid. Svítí, neřeším to.",
    author: "Martin Dvořák",
    img: "https://www.valk-agro.com/content/smush-webp/2024/09/Valk-Agro-LED-VarkensLeker-3-60.jpeg.webp",
  },
  {
    name: "Výkrm prasat — Středočeský kraj",
    location: "Středočeský kraj, CZ",
    count: "95 ks svítidel",
    halls: "1 výkrmová hala",
    year: "2024",
    quote: "Instalace proběhla rychle, bez problémů. Spotřeba elektřiny šla dolů a svítí to podstatně líp než staré zářivky.",
    author: "Pavel Kratochvíl",
    img: "https://www.valk-agro.com/content/smush-webp/2024/09/Valk-Agro-LED-VarkensDelissen-05.jpg.webp",
  },
  {
    name: "Velkofarma prasat — Jihočeský kraj",
    location: "Jihočeský kraj, CZ",
    count: "540 ks svítidel",
    halls: "6 hal, celý areál",
    year: "2023",
    quote: "Řešili jsme to rok. Porovnávali nabídky. Valk Agro vyhrál ne cenou, ale tím, že nám přivezli vzorové svítidlo na týden testování.",
    author: "Radek Havelka, jednatel",
    img: "https://www.valk-agro.com/content/smush-webp/2024/09/Valk-Agro-LED-MestvarkensHoetteSommer-11-91-scaled.jpg.webp",
  },
  {
    name: "Chov prasat — Plzeňský kraj",
    location: "Plzeňský kraj, CZ",
    count: "210 ks svítidel",
    halls: "3 haly",
    year: "2023",
    quote: "Čpavek, tlakový čistič, mokro — na nic z toho se nemůžu vymluvit. Svítidla jedou jako první den.",
    author: "Tomáš Šimánek",
    img: "https://www.valk-agro.com/content/smush-webp/2024/09/Valk-Agro-LED-VleesvarkensPassendale-24-182.jpeg.webp",
  },
  {
    name: "Rodinná farma — Olomoucký kraj",
    location: "Olomoucký kraj, CZ",
    count: "130 ks svítidel",
    halls: "2 haly",
    year: "2024",
    quote: "Přechod z výbojek na LED — spotřeba klesla o 60 %. Záruka 5 let. To mluví za vše.",
    author: "Petra Součková",
    img: "https://www.valk-agro.com/content/smush-webp/2024/09/Valk-Agro-LED-ZeugenbedrijfGodall-23-166.jpg.webp",
  },
];

export default function ReferencePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-24 md:py-36 relative overflow-hidden">
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #B5A040 0%, transparent 70%)", opacity: 0.07 }}
        />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h1
            className="font-syne font-black text-dirt leading-[0.88] mb-5"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Co říkají
            <br />
            chovatelé.
          </h1>
          <p className="text-mist max-w-[480px] leading-relaxed">
            Žádné marketingové kecy. Tady jsou skutečné farmy, skutečné zkušenosti
            a skutečná čísla.
          </p>
        </div>
      </section>

      {/* References grid */}
      <section className="bg-chalk py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {references.map((ref, i) => (
              <article
                key={i}
                className="bg-white border border-black/10 hover:border-black/20 transition-colors duration-300 group"
              >
                {/* Barn photo */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={ref.img}
                    alt={ref.name}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h2 className="font-syne font-black text-dirt text-lg leading-tight mb-1">
                        {ref.name}
                      </h2>
                      <p className="font-tech text-[11px] tracking-wide uppercase text-mist/50">
                        {ref.location}
                      </p>
                    </div>
                    <span className="font-tech text-[10px] tracking-widest text-brand border-b border-brand/40 pb-0.5 shrink-0">
                      {ref.year}
                    </span>
                  </div>

                  <div className="flex gap-3 mb-5 flex-wrap">
                    <span className="font-tech text-xs text-mist/60 border border-black/10 px-2.5 py-1">{ref.count}</span>
                    <span className="font-tech text-xs text-mist/60 border border-black/10 px-2.5 py-1">{ref.halls}</span>
                  </div>

                  <blockquote className="pt-3 border-t border-black/10">
                    <p className="text-mist text-sm leading-relaxed italic">
                      &ldquo;{ref.quote}&rdquo;
                    </p>
                    <footer className="mt-2 font-tech text-[11px] uppercase tracking-wide text-mist/40">
                      — {ref.author}
                    </footer>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-white py-16 border-t border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2 500+", label: "svítidel v provozu" },
              { value: "40+", label: "realizovaných farem" },
              { value: "CZ + SK", label: "pokrytá území" },
              { value: "5 let", label: "záruka na každý kus" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-syne font-black text-brand mb-1" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
                  {s.value}
                </p>
                <p className="font-tech text-[11px] tracking-[0.12em] uppercase text-mist/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-chalk py-20 text-center">
        <div className="max-w-[600px] mx-auto px-6 md:px-12">
          <h2
            className="font-syne font-black text-dirt leading-[0.88] mb-5"
            style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
          >
            Vaše farma
            <br />
            by mohla být další.
          </h2>
          <p className="text-mist mb-8 leading-relaxed">
            Kontaktujte nás. Do 24 hodin dostanete konkrétní nabídku pro vaši stáj.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="primary" href="/kontakt" size="lg">Poptávka zdarma</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
