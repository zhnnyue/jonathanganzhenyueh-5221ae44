
import React, { useRef, useEffect, useState } from 'react';

interface WorkCase {
  title: string;
  description: string;
}

const workCases: WorkCase[] = [
  {
    title: "Wi-Fi Hacking Demo – Condition Zebra",
    description: "Simulated rogue APs, WPA2 cracking, and man-in-the-middle attacks during internship. Team trained. Risks documented. Protocols improved."
  },
  {
    title: "Deepfake Risk Awareness",
    description: "Researched and presented on deepfake threats. Prompted security shifts in verification practices."
  },
  {
    title: "Social Engineering Simulation",
    description: "Cold-called real employees under pretext to test awareness. Several data points leaked. Results used to upgrade training programs."
  }
];

const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 px-4 bg-[#010101]">
      <div className="container mx-auto max-w-5xl relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bebas mb-2 cyber-terminal">
            Proof That Packs a Punch
          </h2>
          <p className="text-cyber-blue mb-12 text-sm uppercase tracking-wider">REAL-WORLD CYBERSECURITY EXPERIENCE</p>

          <div className="grid md:grid-cols-3 gap-8">
            {workCases.map((workCase, index) => (
              <div 
                key={index}
                className={`border rounded-md p-6 transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  activeCase === index ? 'border-cyber-red bg-[#0F0F0F]' : 'border-cyber-blue/30 hover:border-cyber-blue'
                }`}
                onClick={() => setActiveCase(index)}
              >
                {/* Badge indicator */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
                  activeCase === index ? 'bg-cyber-red shadow-[0_0_8px_#FF3D3D]' : 'bg-cyber-blue/30'
                }`}></div>
                
                {/* Animated border corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <h3 className="font-semibold mb-4 text-lg">{workCase.title}</h3>
                <p className="text-gray-300 text-sm">{workCase.description}</p>
                
                {/* Timeline indicator */}
                <div className="mt-6 border-t border-cyber-blue/20 pt-4 text-xs text-cyber-blue flex justify-between items-center">
                  <span>CASE #{index + 1}</span>
                  <span className="opacity-70">EVIDENCE DOCUMENTED</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional details */}
          <div className="mt-12 p-6 border border-cyber-blue/30 rounded-md bg-[#050505]">
            <div className="flex justify-between items-center mb-4">
              <div className="text-cyber-blue text-sm">CASE DETAILS</div>
              <div className="text-xs text-cyber-blue/70">{`ID: ${String(activeCase + 1).padStart(3, '0')}`}</div>
            </div>

            <h3 className="text-xl font-semibold mb-2">{workCases[activeCase].title}</h3>
            <p className="mb-6 text-gray-300">{workCases[activeCase].description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-cyber-blue/20 p-3 rounded-md">
                <div className="text-xs text-cyber-blue/70 mb-1">APPROACH</div>
                <div className="text-sm">Hands-on Testing</div>
              </div>
              <div className="border border-cyber-blue/20 p-3 rounded-md">
                <div className="text-xs text-cyber-blue/70 mb-1">TOOLS</div>
                <div className="text-sm">Custom Toolset</div>
              </div>
              <div className="border border-cyber-blue/20 p-3 rounded-md">
                <div className="text-xs text-cyber-blue/70 mb-1">OUTCOME</div>
                <div className="text-sm">Security Enhanced</div>
              </div>
              <div className="border border-cyber-blue/20 p-3 rounded-md">
                <div className="text-xs text-cyber-blue/70 mb-1">TIMELINE</div>
                <div className="text-sm">Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
