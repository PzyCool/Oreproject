import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ...props
}) {
  const variants = {
    primary: 'bg-donut-brown text-white hover:bg-opacity-90 disabled:bg-gray-300',
    secondary: 'bg-white text-donut-brown border border-donut-brown hover:bg-cream disabled:bg-gray-100',
    accent: 'bg-accent-gold text-charcoal hover:bg-opacity-90 disabled:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoadingSpinner size="sm" className="mr-2" />}
      {children}
    </button>
  );
}