
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const FloatingDownloadButton = () => {
  const [visible, setVisible] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  
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
      href="/assets/Resume of Gan Zhen Yueh.pdf" 
      download
      className={`fixed bottom-6 right-6 z-50 bg-transparent border border-cyber-blue text-cyber-blue font-bold rounded-md p-3 shadow-lg transition-all duration-300 
      ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      hover:bg-cyber-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,91,255,0.9)]`}
      aria-label="Download Resume"
      onMouseEnter={() => setGlitchActive(true)}
      onMouseLeave={() => setGlitchActive(false)}
    >
      <div 
        className={`flex items-center gap-2 px-1 ${glitchActive ? 'cyber-glitch' : ''}`} 
        data-text="DOWNLOAD CV"
      >
        <Download size={20} className="stroke-[2.5]" />
        <span className="hidden sm:inline tracking-wider">DOWNLOAD CV</span>
      </div>
    </a>
  );
};

export default FloatingDownloadButton;
