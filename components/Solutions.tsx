'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const painPoints = [
  {
    title: 'Tried automation that broke after launch',
    description: 'Many teams have tried Zapier setups or no-code tools that didn’t scale, broke silently, or required constant babysitting.'
  },
  {
    title: 'Hired devs but lacked clear direction',
    description: 'They brought in engineers—but without a technical roadmap or strategy, nothing stuck.'
  },
  {
    title: 'Invested in tools, not systems',
    description: 'They subscribed to dozens of platforms, yet still relied on manual work to glue things together.'
  }
];

export default function PainSectionCloser() {
  return (
    <section className="bg-neutral-950 text-white py-24 px-6" id="past-pain-section">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">You’ve Tried Before…</h2>
        <p className="text-lg text-gray-400">
          Most of our clients come to us after wasting time and money trying things that didn’t work.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 text-left shadow hover:shadow-md transition"
          >
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-500 w-6 h-6 mr-2" />
              <h3 className="font-semibold text-lg text-white">{point.title}</h3>
            </div>
            <p className="text-gray-400 text-sm">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
