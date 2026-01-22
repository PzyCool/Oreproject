import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ChefHat, ShoppingBag, LogOut } from 'lucide-react';
import { useAuthStore } from '../store';

export default function AdminSidebar() {
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);

  const menuItems = [
    {
      to: '/admin',
      label: 'Dashboard',
      icon: LayoutDashboard,
      exact: true
    },
    {
      to: '/admin/products',
      label: 'Products',
      icon: Package
    },
    {
      to: '/admin/recipes',
      label: 'Recipes',
      icon: ChefHat
    },
    {
      to: '/admin/orders',
      label: 'Orders',
      icon: ShoppingBag
    }
  ];

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-64 bg-white shadow-bakery h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-donut-brown">Admin Panel</h2>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.to, item.exact)
                      ? 'bg-donut-brown text-white'
                      : 'text-gray-700 hover:bg-cream hover:text-donut-brown'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors w-full"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}