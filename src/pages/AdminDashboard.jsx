import React, { useEffect } from 'react';
import { ShoppingBag, Package, ChefHat, Users, DollarSign, TrendingUp } from 'lucide-react';
import { useProductStore } from '../store';
import { useRecipeStore } from '../store';
import { useOrderStore } from '../store';
import { formatCurrency } from '../lib/utils';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AdminDashboard() {
  const { products, fetchProducts } = useProductStore();
  const { recipes, fetchRecipes } = useRecipeStore();
  const { orders, fetchAllOrders, isLoading } = useOrderStore();

  useEffect(() => {
    fetchProducts();
    fetchRecipes();
    fetchAllOrders();
  }, [fetchProducts, fetchRecipes, fetchAllOrders]);

  const totalRevenue = orders.reduce((total, order) => total + order.total, 0);
  const totalRecipesSold = orders.reduce((total, order) =>
    total + order.items.filter(item => item.product.category === 'recipes').length, 0
  );

  const recentOrders = orders.slice(0, 5);

  const stats = [
    {
      label: 'Total Products',
      value: products.length,
      icon: Package,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Total Recipes',
      value: recipes.length,
      icon: ChefHat,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Total Orders',
      value: orders.length,
      icon: ShoppingBag,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      label: 'Total Revenue',
      value: formatCurrency(totalRevenue),
      icon: DollarSign,
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-cream to-blush-pink p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-charcoal mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your bakery's products, recipes, and orders</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-bakery">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-bakery p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-charcoal">Recent Orders</h2>
            <a href="/admin/orders" className="text-donut-brown hover:text-opacity-80 text-sm font-medium">
              View All
            </a>
          </div>

          {recentOrders.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No orders yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-charcoal">Order #{order.id.slice(-8)}</p>
                    <p className="text-sm text-gray-600">{order.userId}</p>
                    <p className="text-sm text-gray-600 capitalize">{order.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-charcoal">{formatCurrency(order.total)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-bakery p-6">
          <h2 className="text-xl font-bold text-charcoal mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-3">
            <a
              href="/admin/products"
              className="flex items-center justify-center space-x-2 bg-donut-brown text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <Package className="h-5 w-5" />
              <span>Manage Products</span>
            </a>
            <a
              href="/admin/recipes"
              className="flex items-center justify-center space-x-2 bg-blush-pink text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <ChefHat className="h-5 w-5" />
              <span>Manage Recipes</span>
            </a>
            <a
              href="/admin/orders"
              className="flex items-center justify-center space-x-2 bg-charcoal text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Manage Orders</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-lg shadow-bakery p-6">
        <h2 className="text-xl font-bold text-charcoal mb-4">Top Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="font-medium text-charcoal text-sm">{product.name}</p>
                <p className="text-sm text-gray-600">{formatCurrency(product.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}