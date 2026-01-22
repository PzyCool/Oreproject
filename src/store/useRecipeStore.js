import { create } from 'zustand';
import { getRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe, purchaseRecipe, getPurchasedRecipes, hasPurchasedRecipe } from '../mockApi';
import useAuthStore from './useAuthStore';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  currentRecipe: null,
  purchasedRecipes: [],
  isLoading: false,
  error: null,

  fetchRecipes: async () => {
    set({ isLoading: true, error: null });
    try {
      const recipes = await getRecipes();
      set({ recipes, isLoading: false });
      return recipes;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  fetchRecipeById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const recipe = await getRecipeById(id);
      set({ currentRecipe: recipe, isLoading: false });
      return recipe;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  purchaseRecipe: async (recipeId) => {
    const user = useAuthStore.getState().user;
    if (!user) {
      throw new Error('User must be logged in to purchase recipes');
    }

    set({ isLoading: true, error: null });
    try {
      const result = await purchaseRecipe(recipeId, user.id);
      // Refresh purchased recipes
      await get().fetchPurchasedRecipes();
      set({ isLoading: false });
      return result;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  fetchPurchasedRecipes: async () => {
    const user = useAuthStore.getState().user;
    if (!user) return [];

    set({ isLoading: true, error: null });
    try {
      const purchasedRecipeIds = await getPurchasedRecipes(user.id);
      const allRecipes = get().recipes;
      const purchasedRecipes = allRecipes.filter(recipe =>
        purchasedRecipeIds.includes(recipe.id)
      );
      set({ purchasedRecipes, isLoading: false });
      return purchasedRecipes;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  hasPurchasedRecipe: (recipeId) => {
    const user = useAuthStore.getState().user;
    if (!user) return false;
    return hasPurchasedRecipe(user.id, recipeId);
  },

  addRecipe: async (recipeData) => {
    set({ isLoading: true, error: null });
    try {
      const newRecipe = await createRecipe(recipeData);
      const recipes = [...get().recipes, newRecipe];
      set({ recipes, isLoading: false });
      return newRecipe;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  updateRecipe: async (id, recipeData) => {
    set({ isLoading: true, error: null });
    try {
      const updatedRecipe = await updateRecipe(id, recipeData);
      const recipes = get().recipes.map(r =>
        r.id === id ? updatedRecipe : r
      );
      set({ recipes, isLoading: false });
      return updatedRecipe;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  removeRecipe: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await deleteRecipe(id);
      const recipes = get().recipes.filter(r => r.id !== id);
      set({ recipes, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  getRecipesByTag: (tag) => {
    return get().recipes.filter(r => r.tags.includes(tag));
  },

  getRecipesByDifficulty: (difficulty) => {
    return get().recipes.filter(r => r.difficulty === difficulty);
  },

  clearError: () => set({ error: null })
}));

export default useRecipeStore;