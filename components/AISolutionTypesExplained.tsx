'use client';

import { motion } from 'framer-motion';
import { GitCommit, GitBranch, Bot, Network } from 'lucide-react';

const aiSolutions = [
  {
    icon: <GitCommit className="w-10 h-10 text-white" />,
    title: 'Rule Based Automation',
    description: 'Using AI to perform a single-step process with consistent rules and execution.',
    details: "Rule Based Automation is using AI to perform a single-step process. It may be something like querying some data out of a database, passing it into an LLM using an API like the OpenAI API with a prompt on what to do with the data, and then doing something with the results like storing it in a database to be reviewed later. The key feature of a rule-based automation is that it is a single step. The upgrade to rule-based automation is an AI Workflow."
  },
  {
    icon: <GitBranch className="w-10 h-10 text-white" />,
    title: 'AI Workflows',
    description: 'Multi-step processes where the same sequence is followed every time.',
    details: "AI Workflows are multi-step processes where the same steps are followed every time. It may be something like using a model to extract data from a PDF that was attached to an email, creating a JSON object using an LLM and storing it in a database, and then using another LLM to create a response email. It has multiple steps, but they are always the same steps. The steps may involve Retrieval Augmented Generation or other advanced techniques, but what makes it an AI Workflow is that it follows the same steps every time. When the AI Workflow changes its process based on the output of any of the steps, it's no longer an AI Workflow — it becomes an AI Agent."
  },
  {
    icon: <Bot className="w-10 h-10 text-white" />,
    title: 'AI Agents',
    description: 'Adaptive processes that change approach based on results of each step.',
    details: "AI Agents change the process they take based on the results returned by any of the steps in a process. For example, an AI Agent may read an email, and depending on what the email is asking, perform completely different steps. This is where Retrieval Augmented Generation may become very important because AI Agents can take many different routes to return their results.\n\nOnce you have mastered AI Agents in your organization, they can start to work together as Multi-Agent Processes."
  },
  {
    icon: <Network className="w-10 h-10 text-white" />,
    title: 'Multi-Agent Processes',
    description: 'Multiple agents collaborating to solve complex tasks with distributed workloads.',
    details: "Multi-Agent Processes are where multiple agents work together to perform a task. These agents may all be doing the same thing and splitting the workload or may be passing information across agents and dividing the workload into multiple steps. Multi-Agent Processes also often involve humans at different steps of the process and very often perform deep research and use Knowledge Graphs to determine relationships between information."
  }
];

export default function SolutionsSectionCloser() {
  return (
    <section id="process" className="bg-black text-white py-24 px-6 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto text-center relative z-10 mb-16">
        <h2 className="text-5xl font-bold mb-4">Now Imagine If It Just Worked…</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          These are the outcomes our clients enjoy after implementing our AI systems.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {aiSolutions.map((solution, index) => (
          <div 
            key={index}
            className="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg hover:shadow-xl transition h-full flex flex-col"
          >
            <div className="flex flex-col flex-grow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <div className="flex items-center mb-5">
                  <div className="bg-black/40 p-3 rounded-lg mr-4">{solution.icon}</div>
                  <h3 className="text-2xl font-semibold">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-base leading-relaxed">{solution.description}</p>
                <div className="text-gray-400 text-base leading-relaxed mt-4 text-left whitespace-pre-line">
                  {solution.details}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
