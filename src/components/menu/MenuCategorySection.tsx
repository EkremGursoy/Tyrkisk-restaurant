"use client";

import { motion } from "framer-motion";
import MenuItem from "@/components/ui/MenuItem";
import type { MenuCategory } from "@/lib/types";

interface MenuCategorySectionProps {
  category: MenuCategory;
  index: number;
}

export default function MenuCategorySection({
  category,
  index,
}: MenuCategorySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl border border-beige/10 bg-surface p-6 sm:p-8"
    >
      <h2 className="font-display text-2xl font-semibold text-gold sm:text-3xl">
        {category.title}
      </h2>
      <div className="mt-4 divide-y divide-beige/5">
        {category.items.map((item, itemIndex) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            index={itemIndex}
          />
        ))}
      </div>
    </motion.section>
  );
}
