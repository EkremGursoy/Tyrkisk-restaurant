"use client";

import { motion } from "framer-motion";

export default function MapPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl border border-beige/10"
    >
      <div className="relative flex aspect-[16/9] items-center justify-center bg-surface-light sm:aspect-[21/9]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1c1917_25%,#292524_50%,#1c1917_75%)] opacity-80" />
        <div className="relative z-10 text-center px-4">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-surface">
            <svg
              className="h-6 w-6 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <p className="font-display text-lg text-beige-light">
            Karl Johans gate 00, Oslo
          </p>
          <p className="mt-2 text-sm text-beige/60">
            Google Maps embed placeholder
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-gold transition-colors hover:text-gold-light"
          >
            Open in Google Maps →
          </a>
        </div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,162,39,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </motion.div>
  );
}
