import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Eye, RotateCcw, Truck, CheckCircle, Clock } from 'lucide-react';
import Button from '../components/Button';
import { useOrderStore } from '../store';
import { useCartStore } from '../store';
import { formatCurrency, formatDate, getStatusColor, getStatusLabel } from '../lib/utils';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

export default function Orders() {
  const [searchParams] = useSearchParams();
  const { orders, fetchOrders, isLoading } = useOrderStore();
  const addItem = useCartStore((state) => state.addItem);

  const highlightOrderId = searchParams.get('highlight');

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleReorder = (order) => {
    // Add all items from the order back to cart
    order.items.forEach(item => {
      addItem(item.product, item.options);
    });
    toast.success('Items added to cart!');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-charcoal mb-4">No Orders Yet</h2>
        <p className="text-gray-600 mb-6">Your order history will appear here once you make your first purchase.</p>
        <Link to="/shop">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-charcoal">My Orders</h1>
        <Link to="/shop">
          <Button variant="secondary">Continue Shopping</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {orders.map((order) => {
          const isHighlighted = highlightOrderId === order.id;
          return (
            <div
              key={order.id}
              className={`bg-white rounded-lg shadow-bakery p-6 ${
                isHighlighted ? 'ring-2 ring-donut-brown' : ''
              }`}
            >
              {/* Order Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    Order #{order.id.slice(-8)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Placed on {formatDate(order.createdAt)}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status === 'out-for-delivery' && <Truck className="h-4 w-4 mr-1" />}
                    {order.status === 'delivered' && <CheckCircle className="h-4 w-4 mr-1" />}
                    {order.status === 'pending' && <Clock className="h-4 w-4 mr-1" />}
                    {getStatusLabel(order.status)}
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-3 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-charcoal">{item.product.name}</p>
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
                      <p className="font-medium text-charcoal">
                        {formatCurrency(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">
                      <strong>Delivery:</strong> {order.deliveryDetails.address}, {order.deliveryDetails.city}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Payment:</strong> {order.paymentMethod === 'card' ? 'Credit Card' :
                                               order.paymentMethod === 'bank' ? 'Bank Transfer' : 'Pay on Delivery'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-xl font-bold text-charcoal">
                      {formatCurrency(order.total)}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleReorder(order)}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reorder
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}