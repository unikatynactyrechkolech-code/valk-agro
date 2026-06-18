import { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Poptávka LED osvětlení | Valk Agro",
  description:
    "Poptávejte LED osvětlení pro stáj. Do 24 hodin dostanete konkrétní nabídku. Valk Agro s.r.o.",
};

export default function KontaktPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-20 md:py-28 border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h1
            className="font-syne font-black text-dirt leading-[0.88]"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Poptávka.
            <br />
            <span className="text-mist/50">Do 24 hodin voláme.</span>
          </h1>
        </div>
      </section>

      <section className="bg-chalk py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 lg:pl-8">
              <div className="sticky top-28 flex flex-col gap-8">
                {/* Direct contact */}
                <div>
                  <p className="font-tech text-[11px] tracking-[0.15em] uppercase text-mist/50 mb-4">
                    Přímý kontakt
                  </p>
                  <div className="flex flex-col gap-4">
                    <a
                      href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                      className="group"
                    >
                      <p className="font-tech text-dirt text-sm tracking-wide hover:text-brand transition-colors">
                        {COMPANY.phone}
                      </p>
                      <p className="font-tech text-[10px] text-mist/40 uppercase tracking-wide">
                        Po–Pá 8–17
                      </p>
                    </a>

                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="font-tech text-dirt text-sm tracking-wide hover:text-brand transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                  <div className="border-t border-black/10 pt-6">
                  <p className="font-tech text-[11px] tracking-[0.15em] uppercase text-mist/50 mb-3">
                    Sídlo
                  </p>
                  <address className="not-italic text-mist text-sm leading-relaxed font-tech">
                    {COMPANY.legal}
                    <br />
                    {COMPANY.address}
                    <br />
                    <span className="text-mist/40">IČO: {COMPANY.ico}</span>
                  </address>
                </div>

                {/* Response promise */}
                <div className="bg-brand/5 border border-brand/10 p-5">
                  <p className="font-tech text-[11px] tracking-[0.15em] uppercase text-brand mb-2">
                    Náš slib
                  </p>
                  <p className="text-dirt text-sm leading-relaxed">
                    Každou poptávku zpracujeme do{" "}
                    <strong className="font-semibold">24 hodin</strong>.
                    Dostanete konkrétní nabídku s cenou a termínem — ne prázdný
                    e-mail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
