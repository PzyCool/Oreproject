import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChefHat, Package, TrendingUp } from 'lucide-react';
import { useOrderStore } from '../store';
import { useRecipeStore } from '../store';
import { formatCurrency, formatDate } from '../lib/utils';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Dashboard() {
  const { orders, fetchOrders, isLoading: ordersLoading } = useOrderStore();
  const { purchasedRecipes, fetchPurchasedRecipes, isLoading: recipesLoading } = useRecipeStore();

  useEffect(() => {
    fetchOrders();
    fetchPurchasedRecipes();
  }, [fetchOrders, fetchPurchasedRecipes]);

  const recentOrders = orders.slice(0, 3);
  const totalSpent = orders.reduce((total, order) => total + order.total, 0);

  const stats = [
    {
      label: 'Total Orders',
      value: orders.length,
      icon: ShoppingBag,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Recipes Purchased',
      value: purchasedRecipes.length,
      icon: ChefHat,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Total Spent',
      value: formatCurrency(totalSpent),
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      label: 'Favorite Items',
      value: 'Coming Soon',
      icon: Package,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  if (ordersLoading || recipesLoading) {
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
        <h1 className="text-2xl font-bold text-charcoal mb-2">Welcome back!</h1>
        <p className="text-gray-600">Here's what's happening with your orders and recipes.</p>
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
            <Link to="/dashboard/orders" className="text-donut-brown hover:text-opacity-80 text-sm font-medium">
              View All
            </Link>
          </div>

          {recentOrders.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No orders yet</p>
              <Link to="/shop">
                <button className="bg-donut-brown text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-charcoal">Order #{order.id.slice(-8)}</p>
                    <p className="text-sm text-gray-600">{formatDate(order.createdAt)}</p>
                    <p className="text-sm text-gray-600 capitalize">{order.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-charcoal">{formatCurrency(order.total)}</p>
                    <Link
                      to={`/dashboard/orders`}
                      className="text-donut-brown hover:text-opacity-80 text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Purchased Recipes */}
        <div className="bg-white rounded-lg shadow-bakery p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-charcoal">My Recipes</h2>
            <Link to="/dashboard/recipes" className="text-donut-brown hover:text-opacity-80 text-sm font-medium">
              View All
            </Link>
          </div>

          {purchasedRecipes.length === 0 ? (
            <div className="text-center py-8">
              <ChefHat className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No recipes purchased yet</p>
              <Link to="/recipes">
                <button className="bg-donut-brown text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                  Browse Recipes
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {purchasedRecipes.slice(0, 3).map((recipe) => (
                <div key={recipe.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={recipe.heroImage}
                    alt={recipe.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-charcoal">{recipe.title}</p>
                    <p className="text-sm text-gray-600">{recipe.difficulty}</p>
                  </div>
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="text-donut-brown hover:text-opacity-80 text-sm font-medium"
                  >
                    View Recipe
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-bakery p-6">
        <h2 className="text-xl font-bold text-charcoal mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link to="/shop" className="flex items-center justify-center space-x-2 bg-donut-brown text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span>Order Treats</span>
          </Link>
          <Link to="/recipes" className="flex items-center justify-center space-x-2 bg-blush-pink text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            <ChefHat className="h-5 w-5" />
            <span>Buy Recipes</span>
          </Link>
          <Link to="/dashboard/profile" className="flex items-center justify-center space-x-2 bg-charcoal text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            <span>Update Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}