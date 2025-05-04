
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-cyber-blue/20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bebas text-xl">JONATHAN GAN</div>
            <div className="text-xs text-cyber-blue">CYBERSECURITY SPECIALIST</div>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {currentYear} · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
