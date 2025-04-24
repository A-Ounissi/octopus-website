"use client";

import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
  {
    title: "Too Many Tools",
    description:
      "Juggling 7 platforms, 14 zaps, and 28 browser tabs is not a system. It's a full-time job.",
  },
  {
    title: "Manual Mayhem",
    description:
      "Copy-pasting between tools, digging for docs, chasing updates – all of it steals your focus and time.",
  },
  {
    title: "Broken Handoffs",
    description:
      "From marketing to sales to delivery, every step leaks information, delays progress, and kills momentum.",
  },
];

export default function ClientPainPoints() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Why Your Workflow Feels Broken
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
          If you're cobbling together your stack with duct tape and copy/paste,
          you're not alone. These are the bottlenecks we see every day:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            style={{
              background: 'rgba(23, 23, 23, 0.8)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(55, 65, 81, 1)',
              borderRadius: '0.75rem',
              padding: '2rem',
              textAlign: 'left',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-500 w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">{point.title}</h3>
            </div>
            <p className="text-gray-400">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
