"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function MissionSection() {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="Our Mission"
              subtitle="To serve exceptional Turkish cuisine in an environment where everyone feels at home — honoring tradition while embracing the energy of modern dining."
              align="left"
            />
            <p className="text-beige/70 leading-relaxed">
              We believe great food is about more than taste. It is about
              connection, culture, and care. At Memili, we strive to deliver all
              three with every visit.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl lg:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80"
              alt="Restaurant dining room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
