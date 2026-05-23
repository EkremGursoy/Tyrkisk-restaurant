"use client";

import { motion } from "framer-motion";
import { openingHours, restaurantInfo } from "@/lib/data";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-6"
    >
      <div className="rounded-2xl border border-beige/10 bg-surface p-6">
        <h3 className="font-display text-xl font-semibold text-beige-light">
          Restaurant Info
        </h3>
        <ul className="mt-4 space-y-4 text-sm text-beige/70">
          <li>
            <span className="block text-xs uppercase tracking-wider text-gold">
              Address
            </span>
            {restaurantInfo.address}
          </li>
          <li>
            <span className="block text-xs uppercase tracking-wider text-gold">
              Phone
            </span>
            <a
              href={`tel:${restaurantInfo.phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-gold"
            >
              {restaurantInfo.phone}
            </a>
          </li>
          <li>
            <span className="block text-xs uppercase tracking-wider text-gold">
              Email
            </span>
            <a
              href={`mailto:${restaurantInfo.email}`}
              className="transition-colors hover:text-gold"
            >
              {restaurantInfo.email}
            </a>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-beige/10 bg-surface p-6">
        <h3 className="font-display text-xl font-semibold text-beige-light">
          Opening Hours
        </h3>
        <ul className="mt-4 space-y-3">
          {openingHours.map((slot) => (
            <li
              key={slot.days}
              className="flex justify-between gap-4 border-b border-beige/10 pb-3 text-sm last:border-0 last:pb-0"
            >
              <span className="text-beige/80">{slot.days}</span>
              <span className="font-medium text-gold">{slot.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
