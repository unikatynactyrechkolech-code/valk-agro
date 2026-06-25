import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SHOP_PRODUCTS } from "@/lib/products";
import ProductDetailClient from "@/components/shop/ProductDetailClient";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return SHOP_PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = SHOP_PRODUCTS.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.name} — LED svítidlo ${product.length} | Valk Agro`,
    description: `Kupte ${product.name} — ${product.length}, ${product.watt} W, IP67. Svítivost 4000K nebo 6000K. Záruka 5 let.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = SHOP_PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();
  return <ProductDetailClient product={product} />;
}
