import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="skew-top-sm bg-[#130F0C] py-28 md:py-40 mt-[-2vw]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — LED tubes photo */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://www.valk-agro.com/content/smush-webp/2024/09/ValkAgro-CTA.png.webp"
                alt="Valk Agro Pro LED svítidlo — vodotěsné pro stáje"
                fill
                className="object-contain object-left"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right — text + stats */}
          <div>
            <h2
              className="font-syne font-black text-chalk leading-[0.88] mb-6"
              style={{ fontSize: "clamp(34px, 5.5vw, 70px)" }}
            >
              Rozsvítíte jednou.
              <br />
              <span className="text-mist/50">Pak na to zapomenete.</span>
            </h2>
            <p className="text-mist leading-relaxed max-w-[400px] mb-8">
              Pošlete nám počet svítidel a velikost stáje.
              Do 24 hodin dostanete konkrétní nabídku — bez keců a bez závazků.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-brand text-dirt font-body font-semibold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#c46b08] transition-colors self-start"
              >
                Poptávka zdarma
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="text-mist hover:text-chalk transition-colors text-sm font-tech tracking-wide"
              >
                nebo zavolejte: {COMPANY.phone}
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-2 gap-px bg-white/5">
              {[
                { value: "2 500+", label: "svítidel v provozu" },
                { value: "< 24 h", label: "odpověď na poptávku" },
                { value: "5 let", label: "záruka bez výjimky" },
                { value: "0×", label: "výpadků za rok (průměr)" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#130F0C] p-5 md:p-6">
                  <p
                    className="font-syne font-black text-brand leading-none mb-1"
                    style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-tech text-[10px] tracking-[0.1em] uppercase text-mist/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
