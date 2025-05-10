
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const FloatingDownloadButton = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <a 
      href="/assets/jonathan-gan-resume.pdf" 
      download
      className={`fixed bottom-6 right-6 z-50 bg-cyber-blue text-black font-bold rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-cyber-blue/80 hover:shadow-[0_0_15px_rgba(0,91,255,0.7)] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      aria-label="Download Resume"
    >
      <div className="flex items-center gap-2 px-2">
        <Download size={20} />
        <span className="hidden sm:inline">Resume</span>
      </div>
    </a>
  );
};

export default FloatingDownloadButton;
