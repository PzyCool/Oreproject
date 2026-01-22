import { create } from 'zustand';
import { loginUser, signupUser, logoutUser, getCurrentUser } from '../mockApi';

const useAuthStore = create((set, get) => ({
  user: getCurrentUser(),
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const user = await loginUser(email, password);
      set({ user, isLoading: false });
      return user;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  signup: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const user = await signupUser(userData);
      set({ user, isLoading: false });
      return user;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await logoutUser();
      set({ user: null, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  clearError: () => set({ error: null }),

  isAuthenticated: () => !!get().user,

  isAdmin: () => get().user?.role === 'admin'
}));

export default useAuthStore;