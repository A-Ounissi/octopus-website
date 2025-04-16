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

export default function TrustedBy() {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 animate-pulse-slow">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00C6FF]/20 via-[#6600FF]/10 to-black blur-3xl"></div>
      </div>

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-neutral-400 mb-10">
          Tech we work with:
        </h2>

        {/* Smooth horizontal scroll */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-10 w-max">
            {logos.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-neutral-900 border border-neutral-800 rounded-xl p-4 h-24 shadow-md flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt={`Partner logo ${i + 1}`}
                  width={120}
                  height={60}
                  className="object-contain max-h-12 w-auto"
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
