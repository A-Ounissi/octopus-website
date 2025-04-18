'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const painPoints = [
  {
    title: 'Tried automation that broke after launch',
    description: 'Many teams have tried Zapier setups or no-code tools that didn\'t scale, broke silently, or required constant babysitting.'
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
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden" id="past-pain-section">
      {/* Background elements using site's aesthetic */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient glow */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[120vw] h-[120vh] rounded-full blur-[120px] 
          opacity-30 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-glowPulse"
        />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] bg-repeat opacity-5 pointer-events-none" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">You've Tried Before…</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Most of our clients come to us after wasting time and money trying things that didn't work.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3 relative z-10">
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 text-left shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-500 w-6 h-6 mr-3" />
              <h3 className="font-semibold text-xl text-white">{point.title}</h3>
            </div>
            <p className="text-gray-300 text-base">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
