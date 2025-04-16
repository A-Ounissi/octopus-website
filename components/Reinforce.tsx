'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASectionCloser() {
  return (
    <section className="bg-neutral-950 text-white py-28 px-6 text-center" id="cta-section">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Build Something Incredible—Together
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          If you're ready to automate the boring stuff and scale like never before,
          we’re ready to help you get there.
        </p>

        <Link
          href="#services-section"
          className="inline-flex items-center justify-center gap-3 bg-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 transition"
        >
          Book a Strategy Call <ArrowRight size={20} />
        </Link>

        <p className="text-sm text-gray-500 mt-4">
          We'll design your AI roadmap on the call—no strings attached.
        </p>
      </div>
    </section>
  );
}
