'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASectionCloser() {
  return (
    <section className="bg-black text-white py-28 px-6 text-center relative overflow-hidden" id="cta-section">
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
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold mb-6">
          Let's Build Something Incredible—Together
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          If you're ready to automate the boring stuff and scale like never before,
          we're ready to help you get there.
        </p>

        <Link
          href="https://cal.com/octopus-automations"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition shadow-lg"
        >
          Book a Strategy Call
          <ArrowRight className="h-5 w-5" />
        </Link>

        <p className="text-base text-gray-400 mt-6">
          We'll design your AI roadmap on the call—no strings attached.
        </p>
      </div>
    </section>
  );
}
