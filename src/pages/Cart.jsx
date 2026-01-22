import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import Button from '../components/Button';
import { useCartStore } from '../store';
import { formatCurrency } from '../lib/utils';
import { deliveryFee, freeDeliveryThreshold } from '../data/seedData';
import toast from 'react-hot-toast';

export default function Cart() {
  const { items, updateItem, removeItem, clearCart, getTotalPrice } = useCartStore();

  const subtotal = getTotalPrice();
  const deliveryCost = subtotal >= freeDeliveryThreshold ? 0 : deliveryFee;
  const total = subtotal + deliveryCost;

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      toast.success('Item removed from cart');
    } else {
      updateItem(itemId, { quantity: newQuantity });
    }
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
    toast.success('Item removed from cart');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-charcoal mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some delicious treats to get started!</p>
          <Link to="/shop">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-charcoal mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-bakery p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-charcoal">{item.product.name}</h3>
                  <p className="text-gray-600 text-sm">{formatCurrency(item.product.price)}</p>

                  {/* Options */}
                  {item.options && Object.keys(item.options).length > 0 && (
                    <div className="mt-2 space-y-1">
                      {item.options.size && (
                        <p className="text-xs text-gray-500">Size: {item.options.size}</p>
                      )}
                      {item.options.flavor && (
                        <p className="text-xs text-gray-500">Flavor: {item.options.flavor}</p>
                      )}
                      {item.options.customMessage && (
                        <p className="text-xs text-gray-500">Message: "{item.options.customMessage}"</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="p-1 text-gray-600 hover:text-donut-brown"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="p-1 text-gray-600 hover:text-donut-brown"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right">
                  <p className="font-semibold text-charcoal">
                    {formatCurrency(item.product.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Clear Cart */}
          <div className="flex justify-end">
            <button
              onClick={() => {
                clearCart();
                toast.success('Cart cleared');
              }}
              className="text-red-600 hover:text-red-800 text-sm font-medium"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-bakery p-6 h-fit">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Order Summary</h2>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({items.length} item{items.length !== 1 ? 's' : ''})</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span className={deliveryCost === 0 ? 'text-green-600' : ''}>
                {deliveryCost === 0 ? 'Free' : formatCurrency(deliveryCost)}
              </span>
            </div>

            {subtotal < freeDeliveryThreshold && (
              <p className="text-xs text-gray-500">
                Add {formatCurrency(freeDeliveryThreshold - subtotal)} more for free delivery
              </p>
            )}
          </div>

          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between text-lg font-semibold text-charcoal">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>

          <Link to="/checkout" className="w-full">
            <Button size="lg" className="w-full">
              Proceed to Checkout
            </Button>
          </Link>

          <Link to="/shop" className="block text-center mt-4">
            <button className="text-donut-brown hover:text-opacity-80 text-sm font-medium">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}