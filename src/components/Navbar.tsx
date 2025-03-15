
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Temple', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Darshan', href: '#darshan' },
  { name: 'Donation', href: '#' },
  { name: 'Contact', href: '#footer' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="temple-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="font-heading text-2xl font-bold text-temple-gold">
                Kashi<span className="text-temple-orange">Vishwanath</span>
              </div>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
            <button className="temple-button ml-4">
              Donate
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-temple-gray hover:text-temple-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'md:hidden fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 ease-in-out transform',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col space-y-8 pt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-temple-gray hover:text-temple-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              className="temple-button w-full mt-6"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
