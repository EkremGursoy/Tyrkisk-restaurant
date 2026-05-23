"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section className="section-padding overflow-hidden bg-surface/50">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
              alt="Modern restaurant interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-beige/10" />
          </motion.div>

          <div>
            <SectionHeading
              title="Modern Dining with Turkish Hospitality"
              subtitle="Memili combines contemporary design with the warmth of Turkish culture. Whether you're visiting for lunch, dinner, or takeaway, every guest should feel welcome and comfortable."
              align="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
