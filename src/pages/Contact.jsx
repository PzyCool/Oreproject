import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../components/Button';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-charcoal mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">Get in touch with marma's confectionery</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-bakery p-8">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                placeholder="How can we help you?"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6">Get in touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-donut-brown rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Address</h3>
                  <p className="text-gray-600">23c lawal jankara<br />Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-donut-brown rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Phone</h3>
                  <p className="text-gray-600">+234 810 364 2010</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-donut-brown rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Email</h3>
                  <p className="text-gray-600">damilolaisagir@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-donut-brown rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Saturday: 7:00 AM - 7:00 PM</p>
                    <p>Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Quick Contact */}
          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="font-semibold text-charcoal mb-2">Quick Order</h3>
            <p className="text-gray-600 mb-4">
              For urgent orders or custom requests, message us on WhatsApp
            </p>
            <a
              href="https://wa.me/2348103642010"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" className="w-full">
                Message on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
