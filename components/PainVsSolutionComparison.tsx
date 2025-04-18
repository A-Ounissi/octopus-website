'use client';

import { Check, X } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="services-section" className="bg-black text-white py-24 px-6 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">What's Holding You Back?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Businesses struggle with the same tech challenges before discovering the Octopus advantage. Recognize these patterns?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Traditional Approach */}
          <div className="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-700 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">The Traditional Way</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={22} />
                <span className="text-gray-300">Overpriced consultants who deliver presentations instead of solutions.</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={22} />
                <span className="text-gray-300">Endless meetings and strategy sessions before any actual implementation.</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={22} />
                <span className="text-gray-300">Disconnected tools with no cohesive strategy, leaving you to manage the chaos.</span>
              </li>
            </ul>
          </div>

          {/* Octopus AI Way */}
          <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl border border-gray-800 relative overflow-hidden shadow-lg hover:shadow-xl transition">
            {/* Brand color gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent z-0" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6">The Octopus Approach</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={22} />
                  <span className="text-white">Octopus AI diagnoses your specific needs and deploys tailored, working solutions—fast.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={22} />
                  <span className="text-white">Our Octopus Automation Framework delivers measurable ROI from the very first day.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mt-1 mr-3 flex-shrink-0" size={22} />
                  <span className="text-white">Custom AI agents and Octopus-built systems that run your business while you focus on growth.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
