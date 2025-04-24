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
          style={{ 
            position: 'absolute',
            top: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '9999px',
            transformOrigin: 'top',
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
              <a
                key={section.id}
                href={`#${section.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <motion.div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Enhanced tooltip */}
                  <motion.div 
                    style={{
                      position: 'absolute',
                      left: '2rem',
                      opacity: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '0.375rem',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      whiteSpace: 'nowrap'
                    }}
                    initial={{ x: -5, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.name}
                  </motion.div>
                  
                  {/* Dot with enhanced active state */}
                  <motion.div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'white' : isPassed ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                      border: isActive ? '2px solid white' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
} 