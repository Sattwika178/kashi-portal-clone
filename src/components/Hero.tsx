
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 700, 0);
      const translateY = scrollPosition * 0.4;
      
      heroElement.style.opacity = String(opacity);
      heroElement.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=2834&q=80)',
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div 
        ref={heroRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-300"
      >
        <div className="inline-block mb-6 animate-glow">
          <div className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 text-white/90">
            <span className="text-sm font-medium tracking-wide">श्री काशी विश्वनाथ मन्दिर</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Shri Kashi Vishwanath
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in">
          Experience the divine presence at one of India's most revered ancient temples dedicated to Lord Shiva
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a href="#about" className="temple-button bg-temple-gold/90 hover:bg-temple-gold">
            Explore Temple
          </a>
          <a href="#darshan" className="temple-button-outline text-white border-white/70 hover:bg-white/10">
            Darshan Timings
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
