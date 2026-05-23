"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import jasonImg from "@/pictures/jason-leung--eKZLpj7U0E-unsplash.jpg";
import SectionHeading from "@/components/ui/SectionHeading";

export default function StorySection() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <Image
              src={jasonImg}
              alt="Chef preparing Turkish cuisine"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <SectionHeading
              title="Our Story"
              subtitle="Memili began with a simple vision: bring the soul of Turkish kitchens to Oslo. From family recipes to the sizzle of the grill, every detail reflects our roots and our love for food that brings people together."
              align="left"
            />
            <p className="text-beige/70 leading-relaxed">
              What started as a dream to share authentic flavors has grown into
              a beloved neighborhood restaurant. We take pride in every kebab
              skewer, every plate of meze, and every warm welcome at our door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
