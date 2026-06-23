export default function Problem() {
  const problems = [
    {
      before: "Zářivky praskají každou zimu",
      after: "Speciální světla přežijí 35 000–50 000 hodin. Žádné výměny, žádná údržba.",
    },
    {
      before: "Čpavek ze stáje ničí elektroinstalaci",
      after: "Pouzdro je odolné vůči korozivním plynům. Čpavek nás nezajímá.",
    },
    {
      before: "Tlakový čistič a svítidlo? Špatná kombinace.",
      after: "IP67 — plná ochrana před přímým proudem vody. Rutinní čistění tlakovou vodou nevadí.",
    },
    {
      before: "Elektrikář 2× ročně — i to je málo",
      after: "5 let záruky. Výměna do 5 pracovních dní. Bez diskuze.",
    },
  ];

  return (
    <section className="bg-chalk py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16 md:mb-20 max-w-[620px]">
          <h2 className="font-syne font-black text-dirt leading-[0.88] mb-5"
            style={{ fontSize: "clamp(34px, 5vw, 62px)" }}>
            Co vás trápí.
            <br />
            <span className="text-mist/60">Co to řeší.</span>
          </h2>
          <p className="text-mist leading-relaxed">
            Chovatelé v živočišné výrobě mají s osvětlením stájí dlouhodobě stejné problémy.
            Vyřešili jsme je jednou provždy.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/10">
          {problems.map((item, i) => (
            <div
              key={i}
              className={`p-8 md:p-10 border-b border-black/10 ${
                i % 2 === 0 ? "md:border-r md:border-r-black/10" : ""
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
              <div className="h-px bg-black/8 mb-5" />

              {/* Solution */}
              <div className="flex items-start gap-3">
                <span className="mt-1 font-tech text-brand text-xs uppercase shrink-0">
                  Řešení
                </span>
                <p className="text-dirt text-sm leading-relaxed">
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
