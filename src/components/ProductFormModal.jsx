import React, { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import Button from './Button';
import { useProductStore } from '../store';
import toast from 'react-hot-toast';

const categories = [
  { id: 'cakes', name: 'Cakes' },
  { id: 'donuts', name: 'Donuts' },
  { id: 'pastries', name: 'Pastries' },
  { id: 'bread', name: 'Bread' },
  { id: 'small-chops', name: 'Small Chops' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'shawarma', name: 'Shawarma' },
  { id: 'cheese-steak', name: 'Cheese Steak' },
  { id: 'swallows', name: 'Swallows' },
  { id: 'soups', name: 'Soups' },
  { id: 'rice-dishes', name: 'Rice Dishes' },
  { id: 'proteins', name: 'Proteins' },
  { id: 'nigerian-food', name: 'Nigerian Dishes' }
];

export default function ProductFormModal({ product, onClose, isPopular }) {
  const { addProduct, updateProduct, isLoading } = useProductStore();
  const [formData, setFormData] = useState({
    name: '',
    category: 'cakes',
    price: '',
    description: '',
    image: '',
    stock: true,
    featured: false,
    popular: false,
    isPopular: isPopular,
    options: {}
  });

  useEffect(() => {
    if (product) {
      setFormData({
        ...product,
        price: product.price.toString()
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...formData,
      price: parseInt(formData.price) || 0,
      category: formData.category
    };

    try {
      if (product) {
        await updateProduct(product.id, productData);
        toast.success('Product updated successfully');
      } else {
        await addProduct(productData);
        toast.success('Product added successfully');
      }
      onClose();
    } catch (error) {
      toast.error('Failed to save product');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-charcoal">
            {product ? 'Edit Product' : `Add New ${isPopular ? 'Popular Treat' : 'Bakery Product'}`}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              placeholder="e.g., Red Velvet Cake"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price (₦) *
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              placeholder="0"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              placeholder="Describe your product..."
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL *
            </label>
            <div className="flex space-x-2">
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                placeholder="https://..."
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-12 h-12 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Status Toggles */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="stock"
                id="stock"
                checked={formData.stock}
                onChange={handleChange}
                className="h-4 w-4 text-donut-brown focus:ring-donut-brown border-gray-300 rounded"
              />
              <label htmlFor="stock" className="ml-2 text-sm text-gray-700">
                In Stock
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="featured"
                id="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 text-donut-brown focus:ring-donut-brown border-gray-300 rounded"
              />
              <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                Featured
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="popular"
                id="popular"
                checked={formData.popular}
                onChange={handleChange}
                className="h-4 w-4 text-donut-brown focus:ring-donut-brown border-gray-300 rounded"
              />
              <label htmlFor="popular" className="ml-2 text-sm text-gray-700">
                Popular
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="isPopular"
                id="isPopular"
                checked={formData.isPopular}
                onChange={handleChange}
                className="h-4 w-4 text-donut-brown focus:ring-donut-brown border-gray-300 rounded"
              />
              <label htmlFor="isPopular" className="ml-2 text-sm text-gray-700">
                {isPopular ? 'In Popular Treats' : 'Mark as Popular'}
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="secondary" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : (product ? 'Update Product' : 'Add Product')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

