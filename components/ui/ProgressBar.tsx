'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Define the sections in the order they appear on the page
const sections = [
  { id: 'hero-section', name: 'Home' },
  { id: 'problem-section', name: 'Problems' },
  { id: 'past-pain-section', name: 'Solutions' },
  { id: 'solutions-section', name: 'AI Solutions' },
  { id: 'trust-section', name: 'FAQ' },
  { id: 'cta-section', name: 'Get Started' },
];

export default function ProgressBar() {
  const [activeSection, setActiveSection] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Function to determine which section is currently visible
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    // Initial check and event listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate progress percentage for line fill
  const progressPercentage = (activeIndex / (sections.length - 1)) * 100;

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex">
      <div className="flex flex-col items-center relative h-[25rem]">
        {/* Background vertical line (unfilled) - positioned to connect first dot to last dot exactly */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white/10 rounded-full"
          style={{ top: '6px', bottom: '6px', height: 'calc(100% - 12px)' }}
        />
        
        {/* Filled progress line - positioned to match background line */}
        <motion.div 
          className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-0.5 bg-white/40 rounded-full origin-top"
          style={{ 
            height: `calc(${progressPercentage}% * (100% - 12px) / 100)`,
            maxHeight: 'calc(100% - 12px)'
          }}
          initial={{ height: '0%' }}
          animate={{ 
            height: `calc(${progressPercentage}% * (100% - 12px) / 100)` 
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Section dots - positioned with justify-between to spread evenly */}
        <div className="flex flex-col justify-between h-full py-1.5 relative">
          {sections.map((section, index) => {
            const isLast = index === sections.length - 1;
            const isActive = activeSection === section.id;
            const isPassed = index <= activeIndex;
            
            return (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {/* Enhanced tooltip */}
                <motion.div 
                  className="absolute left-8 opacity-0 group-hover:opacity-100 
                           bg-black/60 backdrop-blur-sm border border-white/10
                           px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap"
                  initial={{ x: -5, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {section.name}
                </motion.div>
                
                {/* Enhanced dot with subtle pulse for active */}
                <motion.div
                  className={`relative z-10 flex items-center justify-center rounded-full transition-all duration-300 
                    ${isLast && isActive 
                      ? 'w-3 h-3 bg-white' 
                      : isLast 
                        ? 'w-2.5 h-2.5 bg-white/70' 
                        : isActive 
                          ? 'w-2 h-2 bg-white' 
                          : isPassed
                            ? 'w-1.5 h-1.5 bg-white/60'
                            : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  animate={isActive ? {
                    scale: [1, 1.1, 1],
                    transition: { 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  } : {}}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
} 