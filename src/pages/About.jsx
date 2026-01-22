import React from 'react';
import { ChefHat, Heart, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-charcoal mb-4">About Auntie's Bakery</h1>
        <p className="text-xl text-gray-600">Baking with love since 1985</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-charcoal mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Auntie's Bakery was founded in 1985 by Maria Rodriguez, who learned the art of baking
            from her grandmother in a small village in Italy. What started as a weekend hobby in
            her kitchen has grown into Lagos' most beloved bakery.
          </p>
          <p className="text-gray-600 mb-4">
            We believe that baking is not just about creating delicious treats, but about bringing
            joy and comfort to people's lives. Every loaf of bread, every cake, every cookie is
            made with this philosophy in mind.
          </p>
          <p className="text-gray-600">
            Today, we continue to use traditional techniques passed down through generations,
            combined with the freshest local ingredients to create exceptional baked goods.
          </p>
        </div>

        <div className="bg-cream rounded-2xl p-8">
          <div className="text-center">
            <ChefHat className="h-16 w-16 text-donut-brown mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-charcoal mb-2">Family Recipes</h3>
            <p className="text-gray-600">
              Our most popular recipes come from Auntie's personal collection, perfected over
              decades of baking for family and friends.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <Heart className="h-12 w-12 text-donut-brown mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-charcoal mb-2">Made with Love</h3>
          <p className="text-gray-600 text-sm">
            Every item is baked with care and attention to detail
          </p>
        </div>
        <div className="text-center">
          <Award className="h-12 w-12 text-donut-brown mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-charcoal mb-2">Award Winning</h3>
          <p className="text-gray-600 text-sm">
            Recognized for excellence in Lagos baking competitions
          </p>
        </div>
        <div className="text-center">
          <Users className="h-12 w-12 text-donut-brown mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-charcoal mb-2">Community Focused</h3>
          <p className="text-gray-600 text-sm">
            Supporting local farmers and community initiatives
          </p>
        </div>
      </div>

      <div className="bg-donut-brown text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Visit Us Today</h2>
        <p className="mb-6">
          Come experience the warmth of Auntie's Bakery. We're located in the heart of Lagos,
          serving fresh baked goods daily.
        </p>
        <div className="text-sm">
          <p>📍 123 Bakery Street, Lagos, Nigeria</p>
          <p>📞 +234 123 456 7890</p>
          <p>🕒 Mon-Sat: 7AM-7PM | Sun: 8AM-4PM</p>
        </div>
      </div>
    </div>
  );
}