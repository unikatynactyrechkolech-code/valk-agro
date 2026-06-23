import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/produkty", label: "Produkty" },
  { href: "/reference", label: "Reference" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-chalk border-t border-black/10 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <span className="font-syne font-black text-lg text-dirt">
                Valk<span className="text-brand"> Agro</span>
              </span>
            </div>
            <p className="text-mist text-sm leading-relaxed max-w-[260px]">
              Speciální světla pro živočišnou výrobu. Jednou instalace — bez starostí.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-mist text-sm hover:text-dirt transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="flex flex-col gap-2.5 text-sm text-mist">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="hover:text-dirt transition-colors font-tech"
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-dirt transition-colors"
              >
                {COMPANY.email}
              </a>
              <address className="not-italic text-mist/70 mt-1 text-xs leading-relaxed">
                {COMPANY.legal}
                <br />
                {COMPANY.address}
                <br />
                IČO: {COMPANY.ico}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-mist/50 text-xs font-tech">
            © {new Date().getFullYear()} {COMPANY.legal} — Všechna práva vyhrazena
          </p>
          <p className="text-mist/30 text-xs">
            Speciální světla pro živočišnou výrobu · IP67 · Česká republika & Slovensko
          </p>
        </div>
      </div>
    </footer>
  );
}
