import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">African Elegance</h3>
            <p className="text-sm mb-4">Rooted in rich African heritage, our brand brings traditional fashion to the modern world with elegance and contemporary style. Each piece celebrates authenticity, culture, and the timeless beauty of Africa.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@africanelegance.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive updates about our latest products and special offers.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 rounded px-3 py-2 flex-grow text-sm"
              />
              <button className="bg-accent hover:bg-accent/90 px-4 py-2 rounded text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} African Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}