import React, { useEffect, useState } from 'react';
import { Eye, Truck, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import { useOrderStore } from '../store';
import { formatCurrency, formatDate, getStatusColor, getStatusLabel } from '../lib/utils';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

export default function AdminOrders() {
  const { orders, fetchAllOrders, updateOrderStatus, isLoading } = useOrderStore();
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      toast.success(`Order status updated to ${getStatusLabel(newStatus)}`);
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  const getStatusOptions = (currentStatus) => {
    const allStatuses = ['pending', 'confirmed', 'baking', 'out-for-delivery', 'delivered'];
    const currentIndex = allStatuses.indexOf(currentStatus);

    // Only allow progressing forward or staying at current status
    return allStatuses.slice(currentIndex);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-charcoal">Manage Orders</h1>
        <div className="text-sm text-gray-600">
          Total Orders: {orders.length}
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <AlertCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-charcoal mb-4">No Orders</h2>
          <p className="text-gray-600">Orders will appear here when customers place them</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-bakery overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        #{order.id.slice(-8)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.userId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(order.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                        className={`text-sm border-0 bg-transparent font-medium ${getStatusColor(order.status)}`}
                      >
                        {getStatusOptions(order.status).map((status) => (
                          <option key={status} value={status}>
                            {getStatusLabel(status)}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatCurrency(order.total)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-charcoal">
                  Order #{selectedOrder.id.slice(-8)}
                </h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">Customer Details</h3>
                    <p className="text-sm text-gray-600">{selectedOrder.deliveryDetails.name}</p>
                    <p className="text-sm text-gray-600">{selectedOrder.deliveryDetails.phone}</p>
                    <p className="text-sm text-gray-600">{selectedOrder.deliveryDetails.address}</p>
                    <p className="text-sm text-gray-600">{selectedOrder.deliveryDetails.city}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">Order Info</h3>
                    <p className="text-sm text-gray-600">Date: {formatDate(selectedOrder.createdAt)}</p>
                    <p className="text-sm text-gray-600">Payment: {selectedOrder.paymentMethod}</p>
                    <p className="text-sm text-gray-600">Status: {getStatusLabel(selectedOrder.status)}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-charcoal mb-2">Items</h3>
                  <div className="space-y-2">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div>
                            <p className="text-sm font-medium">{item.product.name}</p>
                            <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="text-sm font-medium">
                          {formatCurrency(item.product.price * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(selectedOrder.total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}