'use client';

import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need technical skills to work with you?',
    answer: 'Nope. We handle all the technical architecture, setup, and deployment. You just focus on your business.'
  },
  {
    question: 'How fast can we launch?',
    answer: 'Most clients go live in under 2 weeks. Smaller systems are often ready in days.'
  },
  {
    question: 'What if I already have tools in place?',
    answer: 'Perfect. We integrate with your stack—or help you rebuild something better, faster, and more scalable.'
  }
];

export default function ExplainSectionCloser() {
  return (
    <section className="bg-black text-white py-28 px-6 relative overflow-hidden" id="trust-section">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Have Questions?</h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-14">
          Here’s what most people ask us before they get started.
        </p>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-xl p-6 bg-gray-900 hover:bg-gray-800 transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
              <ChevronDown className="text-gray-600 mt-1" size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
