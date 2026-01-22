import React from 'react';
import { formatCurrency } from '../lib/utils';

export default function PriceTag({ price, originalPrice, className = '' }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="text-2xl font-bold text-donut-brown">
        {formatCurrency(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <span className="text-lg text-gray-500 line-through">
          {formatCurrency(originalPrice)}
        </span>
      )}
    </div>
  );
}