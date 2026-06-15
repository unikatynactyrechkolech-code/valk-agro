import { TESTIMONIALS } from "@/lib/constants";
import Image from "next/image";

export default function Testimonial() {
  const main = TESTIMONIALS[0];

  return (
    <section className="bg-dirt py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Barn photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/5">
              <Image
                src="https://www.valk-agro.com/content/smush-webp/2024/09/Valk-Agro-LED-VarkensWanroij-18-130.jpg.webp"
                alt="Prasečí stáj s LED osvětlením"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-brand/5 mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dirt/80 to-transparent p-4 flex items-center justify-between">
                <span className="font-tech text-[10px] tracking-[0.15em] text-brand/80 uppercase">
                  Realizace · Jihomoravský kraj
                </span>
                <span className="font-tech text-[10px] tracking-[0.15em] text-mist/50 uppercase">
                  320 ks svítidel
                </span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-7 lg:pl-8">
            <div
              className="font-syne font-black text-brand leading-none mb-4 select-none"
              style={{ fontSize: "clamp(60px, 8vw, 100px)", opacity: 0.2, lineHeight: 0.8 }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <blockquote className="mb-7">
              <p
                className="font-syne font-black text-chalk leading-[0.9]"
                style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
              >
                &ldquo;{main.quote}&rdquo;
              </p>
            </blockquote>

            <div className="flex items-center gap-5">
              <div className="w-10 h-10 bg-brand/10 border border-brand/20 flex items-center justify-center">
                <span className="font-syne font-black text-brand text-sm">
                  {main.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-body font-semibold text-chalk text-sm">{main.author}</p>
                <p className="font-tech text-[11px] tracking-wide text-mist/60 uppercase">
                  {main.location} · {main.detail}
                </p>
              </div>
            </div>

            <div className="mt-8 w-16 h-0.5 bg-brand opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
