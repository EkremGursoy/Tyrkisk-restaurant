"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-gold/30 bg-surface p-8 text-center"
      >
        <span className="text-4xl" role="img" aria-hidden>
          ✓
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-beige-light">
          Thank you!
        </h3>
        <p className="mt-2 text-beige/70">
          We&apos;ve received your message and will get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-beige/10 bg-surface p-6 sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold text-beige-light">
        Send us a message
      </h3>
      <p className="mt-2 text-sm text-beige/60">
        For reservations and inquiries, fill out the form below.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-beige/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-beige/20 bg-background px-4 py-3 text-beige-light outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-beige/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-beige/20 bg-background px-4 py-3 text-beige-light outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-beige/80">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-beige/20 bg-background px-4 py-3 text-beige-light outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="+47 000 00 000"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm text-beige/80"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-beige/20 bg-background px-4 py-3 text-beige-light outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="How can we help?"
          />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
        </Button>
      </div>
    </motion.form>
  );
}
