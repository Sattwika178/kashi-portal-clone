
import React, { useEffect } from 'react';
import { ArrowRight, Gift, PrayingHands, Star, Heart } from 'lucide-react';

const servicesData = [
  {
    title: "Rudrabhishek",
    description: "Special ritual worship of Lord Shiva involving bathing the Shivalinga with various sacred substances.",
    icon: PrayingHands,
    color: "bg-temple-gold/10",
    iconColor: "text-temple-gold"
  },
  {
    title: "Mangala Aarti",
    description: "Early morning ceremonial light offering to Lord Shiva to begin the day with divine blessings.",
    icon: Star,
    color: "bg-temple-saffron/10",
    iconColor: "text-temple-saffron"
  },
  {
    title: "Shringar Darshan",
    description: "Special viewing of Lord Shiva after the deity has been adorned with flowers and ornaments.",
    icon: Heart,
    color: "bg-temple-red/10",
    iconColor: "text-temple-red"
  },
  {
    title: "Prasad Offering",
    description: "Sacred food offerings made to Lord Shiva that are later distributed to devotees as blessings.",
    icon: Gift,
    color: "bg-temple-orange/10",
    iconColor: "text-temple-orange"
  }
];

const Services = () => {
  useEffect(() => {
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
    <section id="services" className="section-padding bg-secondary/30">
      <div className="temple-container">
        <div className="scroll-animate">
          <h2 className="section-title text-temple-gold">Temple Services</h2>
          <p className="section-subtitle">
            Participate in sacred rituals and offerings to receive divine blessings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="scroll-animate scroll-animate-delay-1 temple-card overflow-visible flex flex-col h-full transition-all duration-500 hover:-translate-y-2"
            >
              <div className="p-6 flex flex-col h-full">
                <div className={`${service.color} p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-5`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-temple-gray mb-3">{service.title}</h3>
                <p className="text-temple-gray/80 mb-5 flex-grow">{service.description}</p>
                <a href="#" className="group inline-flex items-center text-temple-gold font-medium mt-auto">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center scroll-animate scroll-animate-delay-2">
          <a href="#" className="temple-button">
            Book a Special Puja
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
