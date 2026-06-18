import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-syne-var",
  subsets: ["latin-ext"],
  weight: ["800"],
  style: ["normal"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-inter-var",
  subsets: ["latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valk Agro — Vodotěsné LED osvětlení do stájí | IP69K",
  description:
    "Vodotěsná LED svítidla pro chov prasat. IP69K, odolnost vůči čpavku, prašnosti a tlakové vodě. Jednou rozsvítíte — pak na to zapomenete na 15 let.",
  keywords: "LED osvětlení stáje, prasečí stáj, IP69K, vodotěsné svítidlo, chov prasat",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-dirt">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
