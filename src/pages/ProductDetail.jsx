import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Plus, Minus } from 'lucide-react';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import PriceTag from '../components/PriceTag';
import { useProductStore } from '../store';
import { useCartStore } from '../store';
import { formatCurrency } from '../lib/utils';
import toast from 'react-hot-toast';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentProduct, isLoading, fetchProductById } = useProductStore();
  const addItem = useCartStore((state) => state.addItem);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id, fetchProductById]);

  useEffect(() => {
    if (currentProduct?.options?.sizes?.length) {
      setSelectedSize(currentProduct.options.sizes[0]);
    }
    if (currentProduct?.options?.flavors?.length) {
      setSelectedFlavor(currentProduct.options.flavors[0]);
    }
  }, [currentProduct]);

  const handleAddToCart = () => {
    if (!currentProduct) return;

    const options = {};
    if (selectedSize) options.size = selectedSize;
    if (selectedFlavor) options.flavor = selectedFlavor;
    if (customMessage) options.customMessage = customMessage;

    for (let i = 0; i < quantity; i++) {
      addItem(currentProduct, options);
    }

    toast.success(`${quantity} ${currentProduct.name}${quantity > 1 ? 's' : ''} added to cart!`);
  };

  const relatedProducts = []; // In a real app, you'd fetch related products

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate('/shop')}
        className="flex items-center space-x-2 text-gray-600 hover:text-donut-brown mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Shop</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-charcoal mb-4">{currentProduct.name}</h1>

          <PriceTag price={currentProduct.price} className="mb-6" />

          <p className="text-gray-600 mb-6">{currentProduct.description}</p>

          {/* Options */}
          <div className="space-y-6">
            {/* Size */}
            {currentProduct.options?.sizes && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.options.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-donut-brown bg-donut-brown text-white'
                          : 'border-gray-300 text-gray-700 hover:border-donut-brown'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Flavor */}
            {currentProduct.options?.flavors && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Flavor</label>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.options.flavors.map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        selectedFlavor === flavor
                          ? 'border-donut-brown bg-donut-brown text-white'
                          : 'border-gray-300 text-gray-700 hover:border-donut-brown'
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Message */}
            {currentProduct.options?.customMessage && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Message (Optional)
                </label>
                <textarea
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Happy Birthday! or any special message..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                  rows={3}
                  maxLength={100}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {customMessage.length}/100 characters
                </p>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-gray-600 hover:text-donut-brown"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-center min-w-[3rem] font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-gray-600 hover:text-donut-brown"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-gray-600">
                  Total: {formatCurrency(currentProduct.price * quantity)}
                </span>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8">
            <Button
              size="lg"
              className="w-full flex items-center justify-center space-x-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart - {formatCurrency(currentProduct.price * quantity)}</span>
            </Button>
          </div>

          {/* Product details */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-4">Product Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Category:</strong> {currentProduct.category.replace('-', ' ')}</p>
              <p><strong>Stock:</strong> {currentProduct.stock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-charcoal mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}