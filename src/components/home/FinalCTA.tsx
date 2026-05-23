"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
        alt="Turkish dining experience"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-narrow text-center"
        >
          <h2 className="font-display text-3xl font-bold text-beige-light sm:text-4xl lg:text-5xl">
            Ready for a True Turkish
            <br />
            <span className="text-gradient-gold">Dining Experience?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-beige/70">
            Join us for an unforgettable meal. Reserve your table today or get
            in touch with our team.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Book a Table</Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
