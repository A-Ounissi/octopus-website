'use client';

import { Check, X } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="bg-neutral-950 text-white py-24 px-6" id="problem-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">What's Holding You Back?</h2>
          <p className="text-lg text-gray-400">
            Most teams face the same problems when trying to scale with tech. Sound familiar?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Traditional Approach */}
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-700">
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">The Traditional Way</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">Overpriced consultants who just give you slides.</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">Weeks of meetings before anything gets built.</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">Fragmented tools, no clear roadmap, and zero ownership.</span>
              </li>
            </ul>
          </div>

          {/* Octopus AI Way */}
          <div className="bg-black text-white p-8 rounded-xl border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-gradient-to-l from-red-500/20 to-transparent z-0" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6">The Octopus Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-red-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>We diagnose your stack and deploy fast, real solutions.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-red-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Automation that delivers ROI from day one.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-red-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>AI agents, automations, and dashboards—done for you.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
