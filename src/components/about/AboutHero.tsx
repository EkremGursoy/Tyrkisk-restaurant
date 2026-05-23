"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
        alt="Restaurant atmosphere"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />

      <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold text-beige-light sm:text-5xl lg:text-6xl"
        >
          About Memili
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-beige/80"
        >
          Memili was created from a passion for authentic Turkish cuisine and
          genuine hospitality. Our mission is to serve high-quality food while
          creating a welcoming experience for everyone in the community.
          Inspired by traditional Turkish cooking and modern restaurant culture,
          Memili offers a dining experience that feels both authentic and
          contemporary.
        </motion.p>
      </div>
    </section>
  );
}
