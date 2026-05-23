"use client";

import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  index?: number;
}

export default function MenuItem({
  name,
  description,
  price,
  index = 0,
}: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex items-start justify-between gap-4 border-b border-beige/10 py-5 transition-colors hover:border-gold/20"
    >
      <div className="flex-1">
        <h4 className="font-display text-lg font-medium text-beige-light transition-colors group-hover:text-gold">
          {name}
        </h4>
        <p className="mt-1 text-sm text-beige/60">{description}</p>
      </div>
      <span className="shrink-0 font-medium text-gold">{formatPrice(price)}</span>
    </motion.div>
  );
}
