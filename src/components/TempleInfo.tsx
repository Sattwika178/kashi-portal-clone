
import React, { useEffect } from 'react';
import { ArrowRight, History, MapPin, Users } from 'lucide-react';

const features = [
  {
    title: "Rich History",
    description: "Dating back thousands of years, the temple has been rebuilt several times throughout history, with the current structure dating to the 18th century.",
    icon: History,
  },
  {
    title: "Sacred Location",
    description: "Located on the western bank of the holy River Ganges, Kashi Vishwanath is one of the twelve Jyotirlingas, the holiest of Shiva temples.",
    icon: MapPin,
  },
  {
    title: "Spiritual Center",
    description: "Millions of devotees visit annually seeking blessings and spiritual enlightenment, making it one of India's most visited sacred sites.",
    icon: Users,
  },
];

const TempleInfo = () => {
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
    <section id="about" className="section-padding bg-white">
      <div className="temple-container">
        <div className="scroll-animate">
          <h2 className="section-title text-temple-gold">About The Temple</h2>
          <p className="section-subtitle">
            Discover the spiritual significance and ancient heritage of one of India's most revered temples
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2671&q=80" 
                alt="Kashi Vishwanath Temple" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 temple-image-shimmer"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="scroll-animate scroll-animate-delay-1">
              <h3 className="text-2xl font-bold text-temple-gray mb-4">The Abode of Lord Shiva</h3>
              <p className="text-temple-gray/80 mb-6">
                The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Vishwanath Gali of Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples.
              </p>
              <p className="text-temple-gray/80">
                The main deity is known by the various names - Vishwanatha or Vishweshwara meaning the Ruler of the Universe. The temple town, which claims to be the oldest living city in the world, with 3500 years of documented history, is also called Kashi and hence the temple is popularly called Kashi Vishwanath Temple.
              </p>
            </div>

            <div className="pt-6 scroll-animate scroll-animate-delay-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="temple-card p-6 h-full flex flex-col">
                    <div className="mb-4 text-temple-saffron">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-bold text-temple-gray mb-2">{feature.title}</h4>
                    <p className="text-sm text-temple-gray/80 flex-grow">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 scroll-animate scroll-animate-delay-3">
              <a href="#" className="group inline-flex items-center text-temple-gold font-medium">
                Learn more about the temple's history
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleInfo;
