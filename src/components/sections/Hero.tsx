"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="noise-overlay relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-10"
        style={{
          background: "radial-gradient(circle, #B5A040 0%, transparent 65%)",
          opacity: 0.12,
          filter: "blur(2px)",
        }}
      />

      {/* Real hero photo */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] pointer-events-none">
        <Image
          src="https://www.valk-agro.com/content/smush-webp/2024/09/DSC06380_crop-2-scaled.jpg.webp"
          alt="Tlakový čistič mířený na LED svítidlo v prasečí stáji"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent lg:via-white/35 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40" />
      </div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-12 w-full pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-[720px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="font-syne text-dirt font-black leading-[0.9] mb-8"
            style={{ fontSize: "clamp(44px, 7.5vw, 88px)" }}
          >
            Světlo co
            <br />
            <span className="text-brand">přežije</span>
            <br />
            vaši stáj.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            className="text-mist text-base md:text-lg leading-relaxed max-w-[460px] mb-10"
          >
            Speciální světla pro živočišnou výrobu.
            <br />
            Tlak vody, čpavek, prach — neřešíme.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" size="lg" href="/kontakt">
              Poptávka zdarma
            </Button>
            <Button variant="secondary" size="lg" href="/produkty" className="!border-brand !text-brand hover:!border-brand/70 hover:!text-brand/80">
              Technické parametry
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="font-tech text-sm text-mist hover:text-dirt transition-colors"
            >
              {COMPANY.phone}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-30" />
    </section>
  );
}
