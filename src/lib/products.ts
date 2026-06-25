const BASE = "https://www.valk-agro.com/content/smush-webp/2024/08";

export type ProductVariant = {
  k: "4000K" | "6000K";
  label: string;
  img: string;
};

export type Product = {
  id: string;
  name: string;
  length: string;
  watt: number;
  price: number; // CZK bez DPH
  variants: ProductVariant[];
};

export const SHOP_PRODUCTS: Product[] = [
  {
    id: "valk-60",
    name: "Valk Agro Pro 60",
    length: "60 cm",
    watt: 25,
    price: 890,
    variants: [
      { k: "4000K", label: "Neutrální bílá", img: `${BASE}/balk-staand_14.png.webp` },
      { k: "6000K", label: "Studená bílá",   img: `${BASE}/balk-staand_10.png.webp` },
    ],
  },
  {
    id: "valk-120",
    name: "Valk Agro Pro 120",
    length: "120 cm",
    watt: 25,
    price: 1190,
    variants: [
      { k: "4000K", label: "Neutrální bílá", img: `${BASE}/balk-staand_24.png.webp` },
      { k: "6000K", label: "Studená bílá",   img: `${BASE}/balk-staand_20.png.webp` },
    ],
  },
  {
    id: "valk-150",
    name: "Valk Agro Pro 150",
    length: "150 cm",
    watt: 25,
    price: 1490,
    variants: [
      { k: "4000K", label: "Neutrální bílá", img: `${BASE}/balk-staand_34.png.webp` },
      { k: "6000K", label: "Studená bílá",   img: `${BASE}/balk-staand_30.png.webp` },
    ],
  },
];
