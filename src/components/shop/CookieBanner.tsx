"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      // Small delay so it doesn't flash on first render
      const t = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  if (!show) return null;

  const handle = (val: "all" | "essential") => {
    localStorage.setItem("cookie-consent", val);
    setShow(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-black/8 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <p className="text-sm text-mist leading-relaxed max-w-[580px]">
          Používáme cookies pro analýzu návštěvnosti a zlepšení nákupního zážitku.
          Vaše data nikomu neprodáváme.
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handle("essential")}
            className="font-tech text-xs text-mist/50 hover:text-mist transition-colors underline underline-offset-2 whitespace-nowrap"
          >
            Jen nezbytné
          </button>
          <button
            onClick={() => handle("all")}
            className="bg-brand text-dirt font-body font-semibold text-xs uppercase tracking-wider px-6 py-2.5 hover:bg-[#9D8B36] transition-colors whitespace-nowrap"
          >
            Rozumím
          </button>
        </div>
      </div>
    </div>
  );
}
