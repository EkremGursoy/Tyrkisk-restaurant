"use client";

import { motion } from "framer-motion";
import type { Value } from "@/lib/types";

interface ValueCardProps {
  value: Value;
  index?: number;
}

export default function ValueCard({ value, index = 0 }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover rounded-2xl border border-beige/10 bg-surface p-8 text-center"
    >
      <span className="text-4xl" role="img" aria-label={value.title}>
        {value.icon}
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold text-beige-light">
        {value.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-beige/70">
        {value.description}
      </p>
    </motion.div>
  );
}
