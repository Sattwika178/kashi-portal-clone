
import React, { useEffect } from 'react';
import { Clock, Sun, Sunset, Moon } from 'lucide-react';

const timingData = [
  {
    title: "Mangala Aarti",
    time: "3:00 AM - 4:00 AM",
    description: "Early morning ritual",
    icon: Sun,
    color: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200"
  },
  {
    title: "General Darshan",
    time: "4:00 AM - 11:00 AM",
    description: "Morning darshan",
    icon: Sun,
    color: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-200"
  },
  {
    title: "Afternoon Darshan",
    time: "11:30 AM - 3:30 PM",
    description: "Midday viewing",
    icon: Sunset,
    color: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200"
  },
  {
    title: "Evening Aarti",
    time: "7:00 PM - 8:30 PM",
    description: "Evening ceremonies",
    icon: Moon,
    color: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200"
  }
];

const DarshanTimings = () => {
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
    <section id="darshan" className="section-padding bg-white">
      <div className="temple-container">
        <div className="scroll-animate">
          <h2 className="section-title text-temple-gold">Darshan Timings</h2>
          <p className="section-subtitle">
            Plan your visit to the temple with our daily schedule of ceremonies and darshan timings
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-gradient-to-br from-temple-light-gold/20 to-white rounded-xl overflow-hidden shadow-lg border border-temple-light-gold/30 my-12">
          <div className="md:w-1/3 bg-cover bg-center"
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=2731&q=80)' }}>
          </div>
          
          <div className="md:w-2/3 p-8">
            <div className="mb-8 scroll-animate">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-temple-gold mr-2" />
                <h3 className="text-2xl font-bold text-temple-gray">Daily Schedule</h3>
              </div>
              <p className="text-temple-gray/80 mt-2">
                The temple is open every day of the year. Special arrangements during festivals and holidays.
              </p>
            </div>

            <div className="space-y-6">
              {timingData.map((timing, index) => (
                <div 
                  key={index} 
                  className={`scroll-animate scroll-animate-delay-${index + 1} relative ${timing.color} rounded-lg p-5 border ${timing.borderColor} transition-transform duration-500 hover:scale-[1.02]`}
                >
                  <div className="flex items-start">
                    <div className={`${timing.textColor} mr-4`}>
                      <timing.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold ${timing.textColor}`}>{timing.title}</h4>
                      <div className="flex items-center my-1">
                        <p className="text-gray-800 font-medium">{timing.time}</p>
                      </div>
                      <p className="text-gray-600">{timing.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 scroll-animate scroll-animate-delay-3">
              <p className="text-sm text-temple-gray/70 italic">
                * Timings may vary during special occasions and festivals. Please check the official announcements for any changes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center scroll-animate">
          <a href="#" className="temple-button-outline">
            Download Complete Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default DarshanTimings;
