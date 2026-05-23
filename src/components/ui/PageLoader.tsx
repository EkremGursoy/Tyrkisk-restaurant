"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        className="h-10 w-10 rounded-full border-2 border-beige/20 border-t-gold"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-display text-lg text-beige/60"
      >
        Memili
      </motion.p>
    </div>
  );
}
