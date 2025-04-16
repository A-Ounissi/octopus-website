'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          What would your business look like<br className="hidden md:block" />
          if it ran itself?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-10"
        >
          We help founders and teams build automated, AI-first systems that scale without increasing headcount.
        </motion.p>

        <div className="flex flex-wrap gap-6 justify-center">
          <Link
            href="#services-section"
            className="bg-white text-black rounded-full px-8 py-4 font-semibold shadow-md hover:opacity-90 transition"
          >
            Book a Strategy Call
          </Link>
          <Link
            href="#about-us"
            className="bg-transparent border border-white text-white rounded-full px-8 py-4 font-medium hover:bg-white hover:text-black transition"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
