import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function QuantityStepper({ quantity, onIncrease, onDecrease, min = 1, max = 99 }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="p-2 text-gray-600 hover:text-donut-brown disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        <Minus className="h-4 w-4" />
      </button>

      <span className="px-4 py-2 text-center min-w-[3rem] font-medium">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className="p-2 text-gray-600 hover:text-donut-brown disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}