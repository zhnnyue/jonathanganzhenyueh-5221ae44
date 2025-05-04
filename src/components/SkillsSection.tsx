
import React, { useRef, useEffect, useState } from 'react';
import { Shield, Server, Terminal, Users } from 'lucide-react';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="skills" ref={sectionRef} className="py-24 px-4 relative">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-[#050505] to-cyber-black opacity-50"></div>
      </div>

      {/* Right side decoration - vertical line with circles */}
      <div className="absolute right-8 top-0 bottom-0 hidden md:flex flex-col items-center">
        <div className="h-full w-px bg-cyber-red opacity-30"></div>
        <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyber-red shadow-[0_0_8px_#FF3D3D]"></div>
      </div>

      <div className={`container mx-auto max-w-5xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bebas mb-10 inline-flex items-center cyber-terminal">
          Skills That Deliver
          <span className="ml-2 h-6 w-3 bg-cyber-blue animate-text-blink"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-cyber-blue rounded-lg p-6 bg-cyber-black/80 relative group hover:bg-[#050508] transition-colors duration-300">
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-blue"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-blue"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-cyber-blue" size={24} />
              <h3 className="text-2xl font-bebas text-white">Cybersecurity & Pentesting</h3>
            </div>
            
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-cyber-blue mt-1">›</span>
                <span>Web application testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-blue mt-1">›</span>
                <span>Network penetration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-blue mt-1">›</span>
                <span>Vulnerability assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-blue mt-1">›</span>
                <span>Social engineering simulations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-blue mt-1">›</span>
                <span>Deepfake threat research</span>
              </li>
            </ul>
          </div>

          <div className="border border-cyber-red rounded-lg p-6 bg-cyber-black/80 relative group hover:bg-[#050508] transition-colors duration-300">
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-red"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-red"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <Server className="text-cyber-red" size={24} />
              <h3 className="text-2xl font-bebas text-white">Network Engineering</h3>
            </div>
            
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-cyber-red mt-1">›</span>
                <span>TCP/IP, VLAN configuration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-red mt-1">›</span>
                <span>Routing (OSPF, BGP), switching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-red mt-1">›</span>
                <span>Firewall & VPN configuration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-red mt-1">›</span>
                <span>Network monitoring & troubleshooting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-red mt-1">›</span>
                <span>Segmentation best practices</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cyber-black/30 p-4 border-l-4 border-cyber-blue rounded flex items-center gap-4">
            <Terminal className="text-cyber-blue" size={24} />
            <div>
              <h4 className="font-medium">Command Line Proficiency</h4>
              <p className="text-sm opacity-80">Bash, PowerShell, Python scripting</p>
            </div>
          </div>
          
          <div className="bg-cyber-black/30 p-4 border-l-4 border-cyber-red rounded flex items-center gap-4">
            <Users className="text-cyber-red" size={24} />
            <div>
              <h4 className="font-medium">Team Collaboration</h4>
              <p className="text-sm opacity-80">Clear reporting, security awareness training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
