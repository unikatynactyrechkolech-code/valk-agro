import { FEATURES } from "@/lib/constants";

function DropIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function ZapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  drop: DropIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  zap: ZapIcon,
};

export default function ProductFeatures() {
  return (
    <section className="skew-top bg-white py-28 md:py-40 mt-[-3vw]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20">
          <h2
            className="font-syne font-black text-dirt leading-[0.88]"
            style={{ fontSize: "clamp(34px, 5vw, 62px)" }}
          >
            Čtyři věci
            <br />
            co dělají rozdíl.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || ZapIcon;
            return (
              <div
                key={i}
                className="group relative p-8 md:p-10 bg-chalk border border-black/10 hover:border-brand/20 transition-colors duration-300"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-12 h-0.5 bg-brand opacity-50 group-hover:w-24 group-hover:opacity-80 transition-all duration-300" />

                <div>
                  <h3 className="font-syne font-black text-dirt text-lg leading-tight mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-mist text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
