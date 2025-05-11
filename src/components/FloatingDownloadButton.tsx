
import React, { useState, useEffect } from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

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
  
  const handleDownload = () => {
    try {
      // Use a fetch request to check if the file exists before attempting to download
      fetch('/assets/Resume of Gan Zhen Yueh.pdf')
        .then(response => {
          if (!response.ok) {
            throw new Error('Resume file not found');
          }
          return response.blob();
        })
        .then(blob => {
          // Create a blob URL and trigger download
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Resume of Gan Zhen Yueh.pdf';
          document.body.appendChild(link);
          link.click();
          
          // Clean up
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
          
          toast({
            title: "Download started",
            description: "Your download should begin shortly."
          });
        })
        .catch(error => {
          console.error('Download error:', error);
          toast({
            variant: "destructive",
            title: "Download failed",
            description: "Could not download the resume. Please try again later."
          });
        });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "Could not download the resume. Please try again later."
      });
    }
  };
  
  return (
    <Button 
      variant="outline"
      onClick={handleDownload}
      className={`fixed bottom-6 right-6 z-50 bg-transparent border border-cyber-blue text-cyber-blue font-bold p-3 cyber-angular-button shadow-lg transition-all duration-300 
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
    </Button>
  );
};

export default FloatingDownloadButton;
