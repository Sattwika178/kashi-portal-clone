
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-temple-gray text-white pt-16 pb-6">
      <div className="temple-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-temple-gold">Kashi Vishwanath</h3>
            <p className="text-white/80 mb-6">
              One of the most famous Hindu temples dedicated to Lord Shiva, located in Varanasi, Uttar Pradesh, India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-temple-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-temple-gold transition-colors">About Temple</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-temple-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#darshan" className="text-white/80 hover:text-temple-gold transition-colors">Darshan Timings</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">Photo Gallery</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-temple-gold">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">Online Donation</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">Book a Puja</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">Temple Tours</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">Accommodation</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-temple-gold transition-colors">Festivals Calendar</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-temple-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-temple-gold mr-3 mt-0.5" />
                <span className="text-white/80">
                  Kashi Vishwanath Temple, Vishwanath Gali, Varanasi, Uttar Pradesh 221001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-temple-gold mr-3" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-temple-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-temple-gold mr-3" />
                <a href="mailto:info@kashivishwanath.org" className="text-white/80 hover:text-temple-gold transition-colors">
                  info@kashivishwanath.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Kashi Vishwanath Temple. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-4 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-temple-gold transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-temple-gold transition-colors">Terms of Use</a>
                </li>
                <li>
                  <a href="#" className="hover:text-temple-gold transition-colors">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
