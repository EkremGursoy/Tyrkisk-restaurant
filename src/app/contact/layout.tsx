import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Memili in Oslo. Contact us for reservations, find our opening hours, and get directions to Karl Johans gate.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
