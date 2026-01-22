import { create } from 'zustand';
import { createOrder, getOrders, getOrderById, updateOrderStatus, simulatePayment } from '../mockApi';
import useAuthStore from './useAuthStore';

const useOrderStore = create((set, get) => ({
  orders: [],
  currentOrder: null,
  isLoading: false,
  error: null,

  createOrder: async (orderData) => {
    const user = useAuthStore.getState().user;
    if (!user) {
      throw new Error('User must be logged in to create orders');
    }

    set({ isLoading: true, error: null });
    try {
      const order = await createOrder({
        ...orderData,
        userId: user.id
      });
      const orders = [...get().orders, order];
      set({ orders, currentOrder: order, isLoading: false });
      return order;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  fetchOrders: async () => {
    const user = useAuthStore.getState().user;
    if (!user) return [];

    set({ isLoading: true, error: null });
    try {
      const orders = await getOrders(user.id);
      set({ orders, isLoading: false });
      return orders;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  fetchAllOrders: async () => {
    set({ isLoading: true, error: null });
    try {
      const orders = await getOrders(); // No userId for admin
      set({ orders, isLoading: false });
      return orders;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  fetchOrderById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const order = await getOrderById(id);
      set({ currentOrder: order, isLoading: false });
      return order;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  updateOrderStatus: async (orderId, status) => {
    set({ isLoading: true, error: null });
    try {
      const updatedOrder = await updateOrderStatus(orderId, status);
      const orders = get().orders.map(o =>
        o.id === orderId ? updatedOrder : o
      );
      set({ orders, isLoading: false });
      return updatedOrder;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  processPayment: async (paymentData) => {
    set({ isLoading: true, error: null });
    try {
      const result = await simulatePayment(paymentData);
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  getOrderById: (orderId) => {
    return get().orders.find(order => order.id === orderId);
  },

  getOrdersByStatus: (status) => {
    return get().orders.filter(order => order.status === status);
  },

  getRecentOrders: (limit = 5) => {
    return get().orders
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, limit);
  },

  clearError: () => set({ error: null })
}));

export default useOrderStore;