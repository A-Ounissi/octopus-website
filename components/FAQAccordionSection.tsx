'use client';

import { useState } from 'react';
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
  },
  {
    question: 'What happens after the system is built?',
    answer: "We don\"t just launch and leave. You get ongoing support, upgrades, and access to new capabilities as your business evolves. Think of us as your fractional AI team, on call when you need us."
  },
  {
    question: "What if I don't fully understand how AI works?",
    answer: "That\"s totally fine. You don\"t need to. We break things down simply and handle everything technical. You\"ll just see the results: fewer tasks, more output, and cleaner ops."
  }
];

export default function ExplainSectionCloser() {
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState<number>(-1);

  // Toggle function for opening/closing FAQs
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-28 px-6 relative overflow-hidden">
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

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold mb-6">Still Have Questions?</h2>
        <p className="text-xl text-gray-300 max-w-xl mx-auto mb-14">
          Here's what most people ask us before they get started.
        </p>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-xl p-6 bg-neutral-900/80 backdrop-blur-sm hover:bg-neutral-800/80 transition shadow-lg cursor-pointer"
            onClick={() => toggleFaq(i)}
          >
            <div className="flex items-start justify-between">
              <div className="pr-8">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-300 text-base leading-relaxed pt-2">{faq.answer}</p>
                </div>
              </div>
              <ChevronDown 
                className={`text-gray-400 mt-1 transform transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`} 
                size={20} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
