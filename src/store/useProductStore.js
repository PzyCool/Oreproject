import { create } from 'zustand';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../mockApi';

const useProductStore = create((set, get) => ({
  products: [],
  currentProduct: null,
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const products = await getProducts();
      set({ products, isLoading: false });
      return products;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  // Force refresh - always fetches from API, bypassing cache
  refreshProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const products = await getProducts();
      set({ products, isLoading: false });
      return products;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  fetchProductById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const product = await getProductById(id);
      set({ currentProduct: product, isLoading: false });
      return product;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  addProduct: async (productData) => {
    set({ isLoading: true, error: null });
    try {
      const newProduct = await createProduct(productData);
      const products = [...get().products, newProduct];
      set({ products, isLoading: false });
      return newProduct;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  updateProduct: async (id, productData) => {
    set({ isLoading: true, error: null });
    try {
      const updatedProduct = await updateProduct(id, productData);
      const products = get().products.map(p =>
        p.id === id ? updatedProduct : p
      );
      set({ products, isLoading: false });
      return updatedProduct;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  removeProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await deleteProduct(id);
      const products = get().products.filter(p => p.id !== id);
      set({ products, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  getProductsByCategory: (category) => {
    return get().products.filter(p => p.category === category);
  },

  getFeaturedProducts: () => {
    return get().products.filter(p => p.featured);
  },

  getPopularProducts: () => {
    return get().products.filter(p => p.popular);
  },

  clearError: () => set({ error: null })
}));

export default useProductStore;