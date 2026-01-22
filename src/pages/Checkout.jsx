import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAuthStore } from '../store';
import { useCartStore } from '../store';
import { useOrderStore } from '../store';
import { formatCurrency } from '../lib/utils';
import { deliveryFee, freeDeliveryThreshold } from '../data/seedData';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

const steps = [
  { id: 'cart', title: 'Review Cart', description: 'Check your items' },
  { id: 'delivery', title: 'Delivery Details', description: 'Where to deliver' },
  { id: 'payment', title: 'Payment', description: 'Complete your order' }
];

export default function Checkout() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const cartItems = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);
  const createOrder = useOrderStore((state) => state.createOrder);
  const processPayment = useOrderStore((state) => state.processPayment);
  const isLoading = useOrderStore((state) => state.isLoading);

  const [currentStep, setCurrentStep] = useState(0);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: '',
    city: 'Lagos',
    deliveryDate: '',
    deliveryTime: 'morning'
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const subtotal = getTotalPrice();
  const deliveryCost = subtotal >= freeDeliveryThreshold ? 0 : deliveryFee;
  const total = subtotal + deliveryCost;

  // No longer redirecting unauthenticated users - they can checkout but need to auth before payment

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !isLoading) {
      navigate('/cart');
    }
  }, [cartItems, isLoading, navigate]);

  const handleDeliveryChange = (field, value) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [field]: value
    });
  };

  const validateDeliveryDetails = () => {
    const required = ['name', 'phone', 'address', 'city', 'deliveryDate'];
    return required.every(field => deliveryDetails[field].trim());
  };

  const handleNext = () => {
    if (currentStep === 1 && !validateDeliveryDetails()) {
      toast.error('Please fill in all delivery details');
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handlePayment = async () => {
    // Check if user is authenticated before processing payment
    if (!isAuthenticated()) {
      toast.error('Please sign in to complete your purchase');
      navigate('/login', {
        state: {
          from: '/checkout',
          message: 'Please sign in or create an account to complete your purchase'
        }
      });
      return;
    }

    setPaymentProcessing(true);

    try {
      // Create order
      const orderData = {
        items: cartItems,
        deliveryDetails,
        paymentMethod,
        subtotal,
        deliveryFee: deliveryCost,
        total
      };

      const order = await createOrder(orderData);

      // Process payment
      await processPayment({
        orderId: order.id,
        amount: total,
        method: paymentMethod,
        userId: user.id
      });

      // Clear cart and redirect with success state
      clearCart();
      navigate(`/dashboard?order_success=${order.id}`, {
        state: { orderSuccess: true, orderId: order.id }
      });

    } catch (error) {
      toast.error(error.message || 'Payment failed. Please try again.');
    } finally {
      setPaymentProcessing(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
            index <= currentStep
              ? 'bg-donut-brown text-white'
              : 'bg-gray-200 text-gray-500'
          }`}>
            {index < currentStep ? (
              <Check className="h-5 w-5" />
            ) : (
              <span className="text-sm font-medium">{index + 1}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-12 h-0.5 mx-2 ${
              index < currentStep ? 'bg-donut-brown' : 'bg-gray-200'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderCartReview = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-charcoal mb-4">Review Your Order</h2>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium text-charcoal">{item.product.name}</h3>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                {item.options && Object.keys(item.options).length > 0 && (
                  <div className="text-xs text-gray-500 mt-1">
                    {item.options.size && <span>Size: {item.options.size}</span>}
                    {item.options.flavor && <span> • Flavor: {item.options.flavor}</span>}
                    {item.options.customMessage && (
                      <div>Message: "{item.options.customMessage}"</div>
                    )}
                  </div>
                )}
              </div>
              <div className="text-right">
                <p className="font-semibold text-charcoal">
                  {formatCurrency(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Delivery</span>
            <span className={deliveryCost === 0 ? 'text-green-600' : ''}>
              {deliveryCost === 0 ? 'Free' : formatCurrency(deliveryCost)}
            </span>
          </div>
          <div className="flex justify-between text-lg font-semibold text-charcoal border-t border-gray-200 pt-2">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDeliveryDetails = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-charcoal mb-4">Delivery Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={deliveryDetails.name}
              onChange={(e) => handleDeliveryChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={deliveryDetails.phone}
              onChange={(e) => handleDeliveryChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              placeholder="08012345678"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Address
            </label>
            <textarea
              value={deliveryDetails.address}
              onChange={(e) => handleDeliveryChange('address', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              placeholder="Enter your full delivery address"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <select
              value={deliveryDetails.city}
              onChange={(e) => handleDeliveryChange('city', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
            >
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Port Harcourt">Port Harcourt</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Delivery Date
            </label>
            <input
              type="date"
              value={deliveryDetails.deliveryDate}
              onChange={(e) => handleDeliveryChange('deliveryDate', e.target.value)}
              min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Delivery Time
            </label>
            <div className="flex space-x-4">
              {[
                { value: 'morning', label: 'Morning (9AM - 12PM)' },
                { value: 'afternoon', label: 'Afternoon (12PM - 5PM)' },
                { value: 'evening', label: 'Evening (5PM - 8PM)' }
              ].map((time) => (
                <label key={time.value} className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryTime"
                    value={time.value}
                    checked={deliveryDetails.deliveryTime === time.value}
                    onChange={(e) => handleDeliveryChange('deliveryTime', e.target.value)}
                    className="text-donut-brown focus:ring-donut-brown"
                  />
                  <span className="ml-2 text-sm text-gray-700">{time.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-charcoal mb-4">Payment Method</h2>
        <div className="space-y-4">
          <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-donut-brown">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-donut-brown focus:ring-donut-brown"
            />
            <div className="ml-4">
              <div className="font-medium text-charcoal">Credit/Debit Card</div>
              <div className="text-sm text-gray-600">Pay securely with your card</div>
            </div>
          </label>

          <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-donut-brown">
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={paymentMethod === 'bank'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-donut-brown focus:ring-donut-brown"
            />
            <div className="ml-4">
              <div className="font-medium text-charcoal">Bank Transfer</div>
              <div className="text-sm text-gray-600">Transfer directly to our account</div>
            </div>
          </label>

          <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-donut-brown">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-donut-brown focus:ring-donut-brown"
            />
            <div className="ml-4">
              <div className="font-medium text-charcoal">Pay on Delivery</div>
              <div className="text-sm text-gray-600">Pay when you receive your order</div>
            </div>
          </label>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-charcoal mb-3">Card Details</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              />
              <input
                type="text"
                placeholder="CVV"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )}

      <div className="bg-donut-brown text-white p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-medium">Total to Pay</span>
          <span className="text-xl font-bold">{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Add some items to your cart before checking out.</p>
          <Link to="/shop">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-charcoal mb-2">Checkout</h1>
        <p className="text-gray-600">Complete your order in just a few steps</p>
      </div>

      {renderStepIndicator()}

      <div className="bg-white rounded-lg shadow-bakery p-8">
        {currentStep === 0 && renderCartReview()}
        {currentStep === 1 && renderDeliveryDetails()}
        {currentStep === 2 && renderPayment()}

        <div className="flex justify-between mt-8">
          {currentStep > 0 ? (
            <Button variant="secondary" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handlePayment}
              disabled={paymentProcessing}
              className="min-w-[150px]"
            >
              {paymentProcessing ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Processing...
                </>
              ) : (
                `Pay ${formatCurrency(total)}`
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}