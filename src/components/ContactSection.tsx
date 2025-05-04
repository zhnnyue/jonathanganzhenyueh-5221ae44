
import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Mail, Phone, Linkedin, Briefcase, Wifi, Router } from 'lucide-react';

const ContactSection = () => {
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
    <section id="contact" ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-30"></div>
      
      <div className={`container mx-auto max-w-4xl relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bebas mb-4 cyber-terminal">
            Let's Secure Something Together
          </h2>
          <p className="max-w-2xl mx-auto">
            Looking to hire someone who already thinks like an attacker, but works for you? Let's talk.
            Open to entry-level and junior roles in cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-cyber-blue/30 rounded-lg p-6 bg-[#050505] hover:border-cyber-blue transition-colors">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Briefcase size={20} className="mr-2 text-cyber-blue" />
                Hire Me
              </h3>

              <div className="space-y-6 flex-grow">
                <div>
                  <label className="block text-sm text-cyber-blue mb-1">Email</label>
                  <a 
                    href="mailto:jonathanganzhenyueh@gmail.com" 
                    className="flex items-center font-mono text-sm hover:text-cyber-blue transition-colors"
                  >
                    <Mail size={16} className="mr-2" />
                    jonathanganzhenyueh@gmail.com
                  </a>
                </div>
                
                <div>
                  <label className="block text-sm text-cyber-blue mb-1">Phone</label>
                  <a 
                    href="tel:+60111079908" 
                    className="flex items-center font-mono text-sm hover:text-cyber-blue transition-colors"
                  >
                    <Phone size={16} className="mr-2" />
                    +6011-1079 8908
                  </a>
                </div>
                
                <div>
                  <label className="block text-sm text-cyber-blue mb-1">LinkedIn</label>
                  <a 
                    href="https://linkedin.com/in/zhnnyue" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-mono text-sm hover:text-cyber-blue transition-colors"
                  >
                    <Linkedin size={16} className="mr-2" />
                    linkedin.com/in/zhnnyue
                    <ExternalLink size={12} className="ml-2 opacity-70" />
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a href="mailto:jonathanganzhenyueh@gmail.com" className="cyber-button w-full flex justify-center items-center">
                  <span className="flex items-center">INITIATE CONTACT <Mail size={16} className="ml-2" /></span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border border-cyber-blue/30 rounded-lg p-6 bg-[#050505] hover:border-cyber-blue transition-colors">
            <h3 className="text-xl font-semibold mb-6">What I Can Do For You</h3>

            <ul className="space-y-4">
              <li className="flex">
                <div className="min-w-8 text-cyber-blue mr-2">01.</div>
                <div>
                  <h4 className="font-medium">Vulnerability Assessment</h4>
                  <p className="text-sm text-gray-400">Find weaknesses before attackers do</p>
                </div>
              </li>
              <li className="flex">
                <div className="min-w-8 text-cyber-blue mr-2">02.</div>
                <div>
                  <h4 className="font-medium">Security Analysis</h4>
                  <p className="text-sm text-gray-400">Dive deep into your security posture</p>
                </div>
              </li>
              <li className="flex">
                <div className="min-w-8 text-cyber-blue mr-2">03.</div>
                <div>
                  <h4 className="font-medium">Network Troubleshooting</h4>
                  <p className="text-sm text-gray-400">Diagnose and solve complex connectivity issues</p>
                </div>
              </li>
              <li className="flex">
                <div className="min-w-8 text-cyber-blue mr-2">04.</div>
                <div>
                  <h4 className="font-medium">Network Security Configuration</h4>
                  <p className="text-sm text-gray-400">Set up secure VLANs, firewalls and access controls</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-cyber-black border border-cyber-red/30 rounded-md">
              <p className="text-sm">
                <span className="text-cyber-red font-semibold">REMEMBER:</span> Security is not a product, but a process. 
                I'm here to help you establish and maintain that process.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-30"></div>
    </section>
  );
};

export default ContactSection;
