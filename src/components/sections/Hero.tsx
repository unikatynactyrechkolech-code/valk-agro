"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
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
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] pointer-events-none">
        <Image
          src="https://www.valk-agro.com/content/smush-webp/2024/09/DSC06380_crop-2-scaled.jpg.webp"
          alt="Tlakový čistič mířený na LED svítidlo v prasečí stáji"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
        />
        {/* Blend left edge into white bg, keep right side fully visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" style={{background: "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.55) 30%, rgba(255,255,255,0.1) 55%, transparent 75%)"}} />
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
            <Link
              href="/produkty"
              className="inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase text-base px-9 py-4.5 border border-[#B5A040] text-dirt bg-transparent hover:border-[#9D8B36] hover:text-[#9D8B36] transition-all duration-150"
            >
              Technické parametry
            </Link>
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
