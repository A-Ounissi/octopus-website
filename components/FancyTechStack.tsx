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
    <section className="bg-accent py-16 px-4 text-white">
      {/* Title + Subtitle */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Our Tech Stack</h2>
        <p className="text-lg font-bold text-black-700">
          We integrate your business with the most powerful AI tools available today.
        </p>
      </div>

      {/* Container: flex-wrap to place logos in rows, centered horizontally */}
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
        {logos.map((logo) => (
          <motion.div
            key={logo}
            whileHover={{ x: -2, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-48 h-20 bg-white rounded-md flex items-center justify-center text-black 
                       shadow-[8px_8px_0_0_rgba(0,0,0,1)] 
                       hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] 
                       cursor-pointer"
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