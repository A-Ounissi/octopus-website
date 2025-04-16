'use client';

import { motion } from 'framer-motion';
import { Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

const offers = [
  {
    icon: <Rocket className="w-8 h-8 text-white" />,
    title: 'AI Systems That Run 24/7',
    description: 'From sales to operations—we build automation pipelines and agents that do the work for you.',
    benefits: [
      'Autonomous lead generation',
      'Hands-free onboarding and support',
      'Real-time reporting and dashboards'
    ]
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: 'Bespoke AI Agents',
    description: 'Custom-built agents designed for your exact workflow. Integrated with your stack, built to scale.',
    benefits: [
      'Conversational AI agents',
      'Document handling & analysis',
      'Process automation & alerts'
    ]
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    title: 'Your Own Chief AI Officer',
    description: 'Fractional AI team that handles implementation, strategy, training, and maintenance.',
    benefits: [
      'Technical strategy & oversight',
      'Monthly improvements & reporting',
      'On-demand dev & support help'
    ]
  }
];

export default function SolutionsSectionCloser() {
  return (
    <section className="bg-black text-white py-24 px-6" id="solutions-section">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Now Imagine If It Just Worked…</h2>
        <p className="text-lg text-gray-300">
          These are the outcomes our clients enjoy after implementing our AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow hover:shadow-lg transition"
          >
            <div className="mb-4">{offer.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
            <p className="text-gray-400 mb-4">{offer.description}</p>
            <ul className="list-disc text-sm text-gray-400 pl-5 space-y-1 text-left">
              {offer.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
