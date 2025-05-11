
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-black/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-cyber-blue font-bebas text-2xl tracking-wider hover:text-cyber-blue/80 transition-colors flex items-center gap-2">
            <img src="/assets/logo-jg-shield.svg" alt="JG Shield" className="h-8 w-8" />
            <span><span className="text-cyber-text">JONATHAN</span>GAN</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-cyber-blue transition-colors">About</a>
          <a href="#work" className="hover:text-cyber-blue transition-colors">Work</a>
          <a href="#contact" className="hover:text-cyber-blue transition-colors">Contact</a>
          <a 
            href="mailto:jonathanganzhenyueh@gmail.com" 
            className="cyber-angular-button bg-transparent text-cyber-blue px-4 py-2 hover:bg-cyber-blue hover:text-black transition-colors"
          >
            Hire Me
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cyber-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-cyber-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <a 
          href="#about" 
          className="text-2xl hover:text-cyber-blue transition-colors" 
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </a>
        <a 
          href="#work" 
          className="text-2xl hover:text-cyber-blue transition-colors" 
          onClick={() => setMobileMenuOpen(false)}
        >
          Work
        </a>
        <a 
          href="#contact" 
          className="text-2xl hover:text-cyber-blue transition-colors" 
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </a>
        <a 
          href="mailto:jonathanganzhenyueh@gmail.com" 
          className="mt-4 cyber-angular-button bg-transparent text-cyber-blue px-6 py-2 hover:bg-cyber-blue hover:text-black transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
