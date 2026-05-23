"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MenuCategorySection from "@/components/menu/MenuCategorySection";
import Button from "@/components/ui/Button";
import { menuCategories } from "@/lib/data";

export default function MenuPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-16 pt-32">
        <Image
          src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1920&q=80"
          alt="Turkish grill dishes"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/50" />

        <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-gold"
          >
            Our Menu
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-display text-4xl font-bold text-beige-light sm:text-5xl lg:text-6xl"
          >
            Turkish Favorites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-beige/80"
          >
            From sizzling grills to sweet desserts — explore our full selection
            of authentic Turkish dishes.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow space-y-8">
          {menuCategories.map((category, index) => (
            <MenuCategorySection
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        <div className="container-narrow mt-16 text-center">
          <p className="text-sm text-beige/50">
            All prices in NOK. Menu items may vary seasonally.
          </p>
          <div className="mt-6">
            <Button href="/contact">Reserve a Table</Button>
          </div>
        </div>
      </section>
    </>
  );
}
