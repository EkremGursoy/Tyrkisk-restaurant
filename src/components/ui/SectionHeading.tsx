"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 max-w-2xl lg:mb-16 ${alignClass}`}
    >
      <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-gold">
        Memili
      </span>
      <h2 className="font-display text-3xl font-semibold text-beige-light sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-beige/80 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
