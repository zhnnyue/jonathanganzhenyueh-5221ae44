
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="cyber-grid absolute inset-0 w-full h-full opacity-10">
          {Array(20).fill(0).map((_, i) => (
            <div key={i} className="absolute top-0 left-0 w-full h-px bg-cyber-blue" style={{ top: `${i * 5}%` }}></div>
          ))}
          {Array(20).fill(0).map((_, i) => (
            <div key={i + 100} className="absolute top-0 left-0 w-px h-full bg-cyber-blue" style={{ left: `${i * 5}%` }}></div>
          ))}
        </div>
      </div>

      <div className={`z-10 max-w-5xl text-center transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-4">
          <span className="text-cyber-blue inline-block text-sm md:text-base font-mono border border-cyber-blue px-4 py-1 rounded-md">
            CYBERSECURITY SPECIALIST
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bebas mb-6 cyber-glitch" data-text="THE ONE YOU CALL BEFORE THE BREACH HITS THE NEWS.">
          THE ONE YOU CALL <span className="text-cyber-red">BEFORE</span> THE BREACH HITS THE NEWS.
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
          I uncover what your devs missed and what your people weren't trained for. 
          <span className="text-cyber-red font-semibold"> Real threats. Real tests. Real results.</span>
        </p>
        
        <a href="mailto:jonathanganzhenyueh@gmail.com" className="cyber-button">
          <span>HIRE ME BEFORE SOMEONE ELSE DOES</span>
        </a>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <svg className="w-6 h-6 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
