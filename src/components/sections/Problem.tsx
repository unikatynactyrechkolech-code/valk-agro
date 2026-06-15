export default function Problem() {
  const problems = [
    {
      before: "Zářivky praskají každou zimu",
      after: "LED svítidlo přežije 50 000 hodin. To jsou přibližně 17 let denního provozu.",
    },
    {
      before: "Čpavek ze stáje ničí elektroinstalaci",
      after: "Pouzdro je odolné vůči korozivním plynům. Čpavek nás nezajímá.",
    },
    {
      before: "Tlakový čistič a svítidlo? Špatná kombinace.",
      after: "IP69K. 80 barů, 80 °C, přímý proud. Routine cleaning included.",
    },
    {
      before: "Elektrikář 2× ročně — i to je málo",
      after: "5 let záruky. Výměna do 5 pracovních dní. Bez diskuze.",
    },
  ];

  return (
    <section className="bg-[#130F0C] py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16 md:mb-20 max-w-[620px]">
          <h2 className="font-syne font-black text-chalk leading-[0.88] mb-5"
            style={{ fontSize: "clamp(34px, 5vw, 62px)" }}>
            Co vás trápí.
            <br />
            <span className="text-mist/60">Co to řeší.</span>
          </h2>
          <p className="text-mist leading-relaxed">
            Chovatelé prasat mají s osvětlením stájí dlouhodobě stejné problémy.
            Vyřešili jsme je jednou provždy.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/5">
          {problems.map((item, i) => (
            <div
              key={i}
              className={`p-8 md:p-10 border-b border-white/5 ${
                i % 2 === 0 ? "md:border-r md:border-r-white/5" : ""
              }`}
            >
              {/* Problem */}
              <div className="flex items-start gap-3 mb-5">
                <span className="mt-1 font-tech text-mist/50 text-xs uppercase shrink-0">
                  Problém
                </span>
                <p className="text-mist/50 text-sm line-through leading-snug">
                  {item.before}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/8 mb-5" />

              {/* Solution */}
              <div className="flex items-start gap-3">
                <span className="mt-1 font-tech text-brand text-xs uppercase shrink-0">
                  Řešení
                </span>
                <p className="text-chalk text-sm leading-relaxed">
                  {item.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
