"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyMemiliCards } from "@/lib/data";

export default function WhyMemili() {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container-narrow">
        <SectionHeading
          title="A Taste of Turkey, Made Fresh Daily"
          subtitle="At Memili, we combine traditional Turkish recipes with a modern dining experience. Every dish is prepared fresh using authentic spices, quality ingredients, and recipes inspired by generations of Turkish cuisine."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyMemiliCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover rounded-2xl border border-beige/10 bg-surface p-8 text-center"
            >
              <span className="text-4xl" role="img" aria-hidden>
                {card.icon}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-beige-light">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-beige/70">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
