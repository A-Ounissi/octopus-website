"use client";
import Image from "next/image";

const logos = [
  "/logos/airtable.png",
  "/logos/apollo.png",
  "/logos/claude.png",
  "/logos/clay.png",
  "/logos/hubspot.png",
  "/logos/instantly.png",
  "/logos/make.png",
  "/logos/n8n.png",
  "/logos/openai.png",
  "/logos/phantombuster.png",
  "/logos/relevance.png",
  "/logos/sendspark.png",
  "/logos/slack.png",
  "/logos/smartlead.png",
  "/logos/supabase.png",
  "/logos/vapi.png",
  "/logos/whatsapp.png",
  "/logos/zapier.png",
];

// Duplicate the logos array to ensure continuous flow
const allLogos = [...logos, ...logos, ...logos];

export default function TrustedBy() {
  return (
    <section id="results" className="relative py-14 overflow-hidden bg-black">
      {/* Container - full width */}
      <div className="relative z-10 mx-auto px-0">
        {/* Smooth horizontal scroll - no edge blur */}
        <div className="relative overflow-hidden w-full">
          {/* Very subtle left blur - nearly invisible */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 opacity-70"></div>
          
          {/* Very subtle right blur - nearly invisible */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 opacity-70"></div>
          
          {/* Slower moving logos with closer spacing */}
          <div className="flex animate-slow-marquee space-x-16 md:space-x-20 w-max py-12">
            {allLogos.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt={`Partner logo ${i + 1}`}
                  width={150}
                  height={60}
                  className="object-contain max-h-12 w-auto brightness-0 invert"
                  priority={i < 6}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
