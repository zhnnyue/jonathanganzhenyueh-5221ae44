
import React, { useRef, useEffect, useState } from 'react';

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-24 px-4 relative">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-cyber-black to-[#050505] opacity-50"></div>
      </div>

      {/* Left side decoration - vertical line with circles */}
      <div className="absolute left-8 top-0 bottom-0 hidden md:flex flex-col items-center">
        <div className="h-full w-px bg-cyber-blue opacity-30"></div>
        <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyber-blue shadow-[0_0_8px_#005BFF]"></div>
      </div>

      <div className={`container mx-auto max-w-5xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bebas mb-8 inline-flex items-center cyber-terminal">
              Who I Am 
              <span className="ml-2 h-6 w-3 bg-cyber-blue animate-text-blink"></span>
            </h2>
            
            <div className="space-y-4 font-inter">
              <p>
                I'm <span className="text-cyber-blue font-semibold">Jonathan Gan Zhen Yueh</span>, an infosec specialist with a Bachelor's in Information Security. My work at Condition Zebra and Concentrix–Huawei speaks louder than certificates.
              </p>
              <p>
                I've hacked Wi-Fi, simulated deepfake threats, and called real staff as a fake insider. You don't train that from books—you earn it in the field.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="border border-cyber-blue/30 p-4 rounded-md bg-cyber-black/50">
                <div className="text-cyber-blue mb-1 text-sm">EDUCATION</div>
                <div className="font-medium">Bachelor's in Information Security</div>
              </div>
              <div className="border border-cyber-blue/30 p-4 rounded-md bg-cyber-black/50">
                <div className="text-cyber-blue mb-1 text-sm">SPECIALIZATION</div>
                <div className="font-medium">Penetration Testing, Social Engineering</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="border border-cyber-blue rounded-lg p-6 bg-[#050505]">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-cyber-red mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="text-xs text-gray-400 ml-2">terminal</div>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <p className="text-cyber-blue">> whoami</p>
                <p className="ml-2">Jonathan Gan Zhen Yueh</p>
                
                <p className="text-cyber-blue">> cat skills.txt</p>
                <p className="ml-2">Penetration Testing</p>
                <p className="ml-2">Social Engineering</p>
                <p className="ml-2">Network Security</p>
                <p className="ml-2">Threat Detection</p>
                
                <p className="text-cyber-blue">> experience</p>
                <p className="ml-2">Condition Zebra - Security Intern</p>
                <p className="ml-2">Concentrix–Huawei - Technical Support</p>
                
                <p className="text-cyber-blue">> motivation</p>
                <p className="ml-2">Finding vulnerabilities before attackers do</p>
                
                <p className="text-cyber-blue flex items-center">
                  > _<span className="ml-1 h-5 w-2 bg-cyber-blue animate-text-blink"></span>
                </p>
              </div>
            </div>
            
            {/* Background code decorations */}
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 -z-10 rounded-lg border border-cyber-blue/20 bg-cyber-black/50"></div>
            <div className="absolute -top-2 -right-2 -bottom-2 -left-2 -z-10 rounded-lg border border-cyber-blue/10 bg-cyber-black/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
