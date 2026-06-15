"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { PRODUCT_SPECS } from "@/lib/constants";

export default function Specs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#130F0C] py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column — label */}
          <div className="lg:col-span-2">
            <h2
              className="font-syne font-black text-chalk leading-[0.88] mb-6"
              style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
            >
              Valk Agro
              <br />
              Pro LED.
            </h2>
            <p className="text-mist text-sm leading-relaxed max-w-[280px]">
              Žádné kompromisy. Každý parametr byl navržen pro podmínky,
              ve kterých klasická svítidla selhávají.
            </p>

            {/* Cert strip */}
            <div className="mt-8 border border-white/10 p-4">
              <div className="flex flex-wrap gap-2">
                {["IEC 60529", "EN 62493", "CE", "RoHS"].map((cert) => (
                  <span
                    key={cert}
                    className="font-tech text-[10px] tracking-wider text-mist border border-white/10 px-2 py-1"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — specs grid */}
          <div ref={ref} className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-0 border border-white/8">
            {PRODUCT_SPECS.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                className="p-5 md:p-6 border-b border-r border-white/8 relative group"
              >
                {/* Amber bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-brand opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                <p className="font-tech text-[10px] tracking-[0.15em] uppercase text-mist/50 mb-2">
                  {spec.label}
                </p>
                <p className="font-tech text-chalk text-xl md:text-2xl font-medium leading-none">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
