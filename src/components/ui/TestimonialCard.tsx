"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover rounded-2xl border border-beige/10 bg-surface p-8"
    >
      <div className="mb-4 flex gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            aria-hidden
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-lg leading-relaxed text-beige-light">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6 text-sm font-medium text-gold">
        — {testimonial.author}
      </footer>
    </motion.blockquote>
  );
}
