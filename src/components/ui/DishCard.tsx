"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dish } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface DishCardProps {
  dish: Dish;
  index?: number;
}

export default function DishCard({ dish, index = 0 }: DishCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-hover overflow-hidden rounded-2xl border border-beige/10 bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-background">
          {formatPrice(dish.price)}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-beige-light transition-colors group-hover:text-gold">
          {dish.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-beige/70">
          {dish.description}
        </p>
      </div>
    </motion.article>
  );
}
