import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Star, Package } from 'lucide-react';
import Button from '../components/Button';
import { useProductStore } from '../store';
import { formatCurrency } from '../lib/utils';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';
import ProductFormModal from '../components/ProductFormModal';

export default function AdminPopularTreats() {
  const { products, fetchProducts, removeProduct, updateProduct, refreshProducts, isLoading } = useProductStore();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter only popular treats (isPopular = true)
  const popularTreats = products.filter(product => product.isPopular === true);

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to remove this product from Popular Treats?')) {
      try {
        await removeProduct(productId);
        await refreshProducts();
        toast.success('Product removed from Popular Treats');
      } catch (error) {
        toast.error('Failed to remove product');
      }
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleFormClose = async () => {
    setShowForm(false);
    setEditingProduct(null);
    await refreshProducts();
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
        <div>
          <h1 className="text-2xl font-bold text-charcoal">Our Popular Treats</h1>
          <p className="text-gray-600">Manage products featured in "Our Popular Treats" section</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="h-4 w-4 mr-2" />
          Add Popular Treat
        </Button>
      </div>

      {popularTreats.length === 0 ? (
        <div className="text-center py-12">
          <Star className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-charcoal mb-4">No Popular Treats</h2>
          <p className="text-gray-600 mb-6">Start by adding products to your Popular Treats section</p>
          <Button onClick={handleAddNew}>
            <Plus className="h-4 w-4 mr-2" />
            Add Popular Treat
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTreats.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-bakery overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-charcoal px-2 py-1 rounded-full text-xs font-bold flex items-center">
                  <Star className="h-3 w-3 mr-1" />
                  Popular
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-charcoal text-lg">{product.name}</h3>
                  <span className="text-lg font-bold text-donut-brown">
                    {formatCurrency(product.price)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full capitalize">
                    {product.category.replace('-', ' ')}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <ProductFormModal
          product={editingProduct}
          onClose={handleFormClose}
          isPopular={true}
        />
      )}
    </div>
  );
}

