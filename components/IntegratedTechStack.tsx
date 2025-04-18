"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "make", "relevance", "n8n",
  "zapier", "airtable", "clay",
  "supabase", "hubspot", "instantly",
  "whatsapp", "smartlead", "openai",
  "claude", "vapi", "slack",
  "phantombuster", "apollo", "sendspark"
];

export default function FancyTechStack() {
  return (
    <section className="bg-black py-16 px-4 text-white">
      {/* Title + Subtitle */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-8">Tech we work with:</h2>
      </div>

      {/* Container: flex-wrap to place logos in rows, centered horizontally */}
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
        {logos.map((logo) => (
          <motion.div
            key={logo}
            whileHover={{ 
              x: -2, 
              y: -2,
              boxShadow: '6px 6px 0 0 rgba(80,80,80,0.4)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              position: 'relative',
              width: '12rem',
              height: '5rem',
              backgroundColor: '#1A1A1A',
              borderRadius: '0.375rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '4px 4px 0 0 rgba(80,80,80,0.3)',
              cursor: 'pointer'
            }}
          >
            <Image
              src={`/logos/${logo}.png`}
              alt={logo}
              width={140}
              height={40}
              className="object-contain max-h-10"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 