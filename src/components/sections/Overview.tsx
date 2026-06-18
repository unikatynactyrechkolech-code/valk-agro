import Image from "next/image";
import Link from "next/link";

export default function Overview() {
  return (
    <section className="bg-chalk py-0">
      {/* Top block — intro with circular pig photo */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2
              className="font-syne font-black text-dirt leading-[0.88] mb-6"
              style={{ fontSize: "clamp(32px, 4.5vw, 58px)" }}
            >
              Vodotěsné LED osvětlení
              <br />
              pro chov prasat.
            </h2>
            <div className="mb-8">
              <p className="text-mist leading-relaxed">
                S robustními vodotěsnými LED svítidly Valk Agro nemáte jako chovatel
                prasat žádné starosti s osvětlením. Svítidla jsou odolná vůči
                specifickým podmínkám stájí a lze je čistit tlakovým čističem
                bez jakéhokoli rizika poškození.
              </p>
            </div>
            <Link
              href="/produkty"
              className="inline-flex items-center font-body font-semibold text-sm uppercase tracking-wider text-dirt border border-dirt/20 px-6 py-3 hover:border-brand/60 hover:text-brand transition-colors"
            >
              Prohlédnout svítidla
            </Link>
          </div>

          {/* Circular pig photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-brand/20">
              <Image
                src="https://www.valk-agro.com/content/smush-webp/2024/09/home-light-300x300.jpg.webp"
                alt="Prase pod LED osvětlením ve stáji"
                fill
                className="object-cover"
                sizes="320px"
              />
              {/* Subtle amber tint on the glow */}
              <div className="absolute inset-0 bg-brand/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/8" />

      {/* Two-column — pig farming + cattle, each with circular image */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <h2
          className="font-syne font-black text-dirt leading-[0.88] mb-14"
          style={{ fontSize: "clamp(32px, 4.5vw, 58px)" }}
        >
          Zvyšte pohodu zvířat
          <br />
          <span className="text-mist/50">i rentabilitu chovu.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Pig farming */}
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-5">
              <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border border-brand/20">
                <Image
                  src="https://www.valk-agro.com/content/smush-webp/2024/09/round-pigs-2-300x300.jpg.webp"
                  alt="Chov prasat"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <h3 className="font-syne font-black text-dirt text-xl mb-2">
                  Osvětlení prasečích stájí
                </h3>
                <p className="text-mist text-sm leading-relaxed">
                  Stále více chovatelů prasat přechází na robustní, plně vodotěsná
                  LED svítidla Valk Agro. Jednoduchá montáž, nulová údržba, 5 let záruka.
                </p>
              </div>
            </div>
            <Link
              href="/produkty"
              className="font-tech text-xs uppercase text-brand hover:text-[#9D8B36] transition-colors self-start"
            >
              Prohlédnout LED svítidla
            </Link>
          </div>

          {/* Quote */}
          <div className="flex flex-col justify-center">
            <p className="text-dirt/80 text-base leading-relaxed italic mb-4">
              &ldquo;Neváhal jsem ani sekundu namířit tlakový čistič přímo na
              svítidlo. Vypadají robustně a opravdu jsou vodotěsná.&rdquo;
            </p>
            <Link
              href="/reference"
              className="font-tech text-xs uppercase text-brand hover:text-[#9D8B36] transition-colors self-start"
            >
              Zobrazit reference
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
