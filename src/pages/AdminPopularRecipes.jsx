import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Flame, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import { useRecipeStore } from '../store';
import { formatCurrency } from '../lib/utils';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';
import RecipeFormModal from '../components/RecipeFormModal';

export default function AdminPopularRecipes() {
  const { recipes, fetchRecipes, removeRecipe, isLoading } = useRecipeStore();
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  // Filter only popular recipes (isPopular = true)
  const popularRecipes = recipes.filter(recipe => recipe.isPopular === true);

  const handleDelete = async (recipeId) => {
    if (window.confirm('Are you sure you want to remove this recipe from Popular Recipes?')) {
      try {
        await removeRecipe(recipeId);
        toast.success('Recipe removed from Popular Recipes');
      } catch (error) {
        toast.error('Failed to remove recipe');
      }
    }
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setEditingRecipe(null);
    setShowForm(true);
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
          <h1 className="text-2xl font-bold text-charcoal">Popular Recipes</h1>
          <p className="text-gray-600">Manage recipes featured in "Popular Recipes" section</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="h-4 w-4 mr-2" />
          Add Popular Recipe
        </Button>
      </div>

      {popularRecipes.length === 0 ? (
        <div className="text-center py-12">
          <Flame className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-charcoal mb-4">No Popular Recipes</h2>
          <p className="text-gray-600 mb-6">Start by adding recipes to your Popular Recipes section</p>
          <Button onClick={handleAddNew}>
            <Plus className="h-4 w-4 mr-2" />
            Add Popular Recipe
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-bakery overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={recipe.heroImage}
                  alt={recipe.title}
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                  <Flame className="h-3 w-3 mr-1" />
                  Popular
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-charcoal text-lg">{recipe.title}</h3>
                  <span className="text-lg font-bold text-donut-brown">
                    {formatCurrency(recipe.price)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.previewText}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    recipe.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    recipe.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {recipe.difficulty}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(recipe)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(recipe.id)}
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
        <RecipeFormModal
          recipe={editingRecipe}
          onClose={() => {
            setShowForm(false);
            setEditingRecipe(null);
          }}
          isPopular={true}
        />
      )}
    </div>
  );
}

