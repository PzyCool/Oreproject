import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { useCartStore } from '../store';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link
      to={`/shop/${product.id}`}
      className="bg-white rounded-2xl shadow-bakery overflow-hidden hover:shadow-bakery-lg transition-shadow duration-300 group"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-charcoal text-lg leading-tight line-clamp-2">
            {product.name}
          </h3>
          <button
            onClick={handleAddToCart}
            className="ml-2 p-2 bg-donut-brown text-white rounded-lg hover:bg-opacity-90 transition-colors flex-shrink-0"
            title="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-donut-brown">
            {formatCurrency(product.price)}
          </span>

          {product.popular && (
            <span className="px-2 py-1 bg-blush-pink text-white text-xs rounded-full">
              Popular
            </span>
          )}
        </div>

        <div className="mt-2 text-xs text-gray-500 capitalize">
          {product.category.replace('-', ' ')}
        </div>
      </div>
    </Link>
  );
}