import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChefHat, Truck, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import RecipeCard from '../components/RecipeCard';
import Button from '../components/Button';
import { useProductStore } from '../store';
import { useRecipeStore } from '../store';
import { seedTestimonials } from '../data/seedData';

export default function Home() {
  const { products, fetchProducts } = useProductStore();
  const { recipes, fetchRecipes } = useRecipeStore();

  useEffect(() => {
    fetchProducts();
    fetchRecipes();
  }, [fetchProducts, fetchRecipes]);

  // Show featured products first, then fill with popular products if needed
  const featuredProducts = products
    .filter(p => p.featured || p.popular)
    .slice(0, 8);
  const popularRecipes = recipes.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-blush-pink py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Freshly Baked Treats +
              <span className="text-donut-brown"> Secret Recipes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover Auntie's family recipes and order delicious baked goods.
              From chocolate chip cookies to artisan sourdough, we bring joy to your table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="flex items-center space-x-2">
                  <span>Order Treats</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/recipes">
                <Button variant="secondary" size="lg">
                  Buy Recipes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Popular Treats</h2>
            <p className="text-gray-600">Customer favorites and bakery specials</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="secondary">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">How It Works</h2>
            <p className="text-gray-600">Simple steps to delicious treats</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-donut-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Choose Your Treats</h3>
              <p className="text-gray-600">Browse our selection of freshly baked goods and add to cart</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-donut-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Fast Delivery</h3>
              <p className="text-gray-600">We deliver your orders fresh and on time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-donut-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Every item is baked with love and care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Popular Recipes</h2>
            <p className="text-gray-600">Unlock Auntie's secret family recipes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/recipes">
              <Button variant="secondary">
                View All Recipes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Happy customers, happy treats</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-bakery">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Quick Order */}
      <section className="py-16 bg-donut-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Something Special?</h2>
          <p className="text-xl mb-8 opacity-90">
            Custom orders, large quantities, or special requests? Message us on WhatsApp!
          </p>
          <a
            href="https://wa.me/2341234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors"
          >
            <span>Order on WhatsApp</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
