import { create } from 'zustand';
import { addToCart, getCart, updateCartItem, removeCartItem, clearCart } from '../mockApi';

const useCartStore = create((set, get) => ({
  items: getCart(),
  isLoading: false,

  addItem: (product, options = {}) => {
    const newItems = addToCart(product, options);
    set({ items: newItems });
  },

  updateItem: (itemId, updates) => {
    const newItems = updateCartItem(itemId, updates);
    set({ items: newItems });
  },

  removeItem: (itemId) => {
    const newItems = removeCartItem(itemId);
    set({ items: newItems });
  },

  clearCart: () => {
    clearCart();
    set({ items: [] });
  },

  getItemCount: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  },

  getItemById: (itemId) => {
    return get().items.find(item => item.id === itemId);
  },

  // Sync with localStorage on changes
  syncCart: () => {
    const cartItems = getCart();
    set({ items: cartItems });
  }
}));

export default useCartStore;