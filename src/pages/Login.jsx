import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChefHat, Eye, EyeOff } from 'lucide-react';
import Button from '../components/Button';
import { useAuthStore } from '../store';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || '/dashboard';
  const checkoutMessage = location.state?.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();

    try {
      await login(formData.email, formData.password);
      toast.success('Welcome back!');
      navigate(from, { replace: true });
    } catch (error) {
      // Error is handled by the store
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDemoLogin = async (role) => {
    const demoCredentials = {
      customer: { email: 'customer@example.com', password: 'password' },
      admin: { email: 'admin@example.com', password: 'admin123' }
    };

    try {
      await login(demoCredentials[role].email, demoCredentials[role].password);
      toast.success(`Logged in as ${role}!`);
      navigate(from, { replace: true });
    } catch (error) {
      // Error is handled by the store
    }
  };

  return (
    <div className="max-w-md w-full">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <ChefHat className="h-12 w-12 text-donut-brown" />
        </div>
        <h1 className="text-3xl font-bold text-charcoal mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to your Auntie's Bakery account</p>
        {checkoutMessage && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm">{checkoutMessage}</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      {/* Demo Login Buttons */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-center text-sm text-gray-600 mb-4">Demo Accounts</p>
        <div className="space-y-3">
          <Button
            onClick={() => handleDemoLogin('customer')}
            variant="secondary"
            className="w-full"
            disabled={isLoading}
          >
            Login as Customer
          </Button>
          <Button
            onClick={() => handleDemoLogin('admin')}
            variant="secondary"
            className="w-full"
            disabled={isLoading}
          >
            Login as Admin
          </Button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-donut-brown hover:text-opacity-80 font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}