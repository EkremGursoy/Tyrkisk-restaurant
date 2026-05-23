import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Memili's menu — grills & kebabs, Turkish classics, meze, desserts, and drinks. Authentic flavors in Oslo.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
