import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/public/marma's-logo copy.png" alt="Logo" className="h-8 w-8" />
              </Link>
              <span className="text-xl font-bold text-accent-gold">marma's confectionary</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Freshly baked treats and secret family recipes. Bringing joy to your table,
              one delicious bite at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-accent-gold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-accent-gold transition-colors">
                Home
              </Link>
              <Link to="/shop" className="block text-gray-300 hover:text-accent-gold transition-colors">
                Shop
              </Link>
              <Link to="/recipes" className="block text-gray-300 hover:text-accent-gold transition-colors">
                Recipes
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-accent-gold transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-accent-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-accent-gold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-gold" />
                <span className="text-gray-300">+234 8103642010</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-gold" />
                <span className="text-gray-300">damiisagirl1827@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent-gold mt-1" />
                <span className="text-gray-300">
              23c lawal jankara,<br />
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} marma's confectionary. All rights reserved.
            Made with ❤️ for delicious moments.
          </p>
        </div>
      </div>
    </footer>
  );
}