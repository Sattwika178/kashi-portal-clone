
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TempleInfo from '@/components/TempleInfo';
import Services from '@/components/Services';
import DarshanTimings from '@/components/DarshanTimings';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TempleInfo />
      <Services />
      <DarshanTimings />
      <Footer />
    </div>
  );
};

export default Index;
