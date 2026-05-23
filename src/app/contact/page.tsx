"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapPlaceholder from "@/components/contact/MapPlaceholder";

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[45vh] items-end overflow-hidden pb-12 pt-32">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
          alt="Restaurant exterior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />

        <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-beige-light sm:text-5xl lg:text-6xl"
          >
            Visit Memili
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-xl text-beige/80"
          >
            We&apos;d love to hear from you. Reach out for reservations,
            events, or any questions.
          </motion.p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-narrow">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>

          <div className="mt-12">
            <MapPlaceholder />
          </div>
        </div>
      </section>
    </>
  );
}
