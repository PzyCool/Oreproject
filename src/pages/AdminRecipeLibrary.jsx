import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Library, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import { useRecipeStore } from '../store';
import { formatCurrency } from '../lib/utils';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';
import RecipeFormModal from '../components/RecipeFormModal';

export default function AdminRecipeLibrary() {
  const { recipes, fetchRecipes, removeRecipe, isLoading } = useRecipeStore();
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  // Filter only library recipes (isPopular = false or undefined)
  const libraryRecipes = recipes.filter(recipe => recipe.isPopular !== true);

  const handleDelete = async (recipeId) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await removeRecipe(recipeId);
        toast.success('Recipe deleted successfully');
      } catch (error) {
        toast.error('Failed to delete recipe');
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
          <h1 className="text-2xl font-bold text-charcoal">Recipe Library</h1>
          <p className="text-gray-600">Manage recipes in the "Recipe Library" section</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="h-4 w-4 mr-2" />
          Add to Library
        </Button>
      </div>

      {libraryRecipes.length === 0 ? (
        <div className="text-center py-12">
          <Library className="h-16 w-16 text-donut-brown mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-charcoal mb-4">No Recipes in Library</h2>
          <p className="text-gray-600 mb-6">Start by adding recipes to your Recipe Library</p>
          <Button onClick={handleAddNew}>
            <Plus className="h-4 w-4 mr-2" />
            Add to Library
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-bakery overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recipe
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prep Time
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {libraryRecipes.map((recipe) => (
                  <tr key={recipe.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-lg object-cover"
                            src={recipe.heroImage}
                            alt={recipe.title}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{recipe.title}</div>
                          <div className="text-sm text-gray-500 line-clamp-1">{recipe.previewText}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        recipe.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        recipe.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {recipe.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatCurrency(recipe.price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {recipe.prepTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleEdit(recipe)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(recipe.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showForm && (
        <RecipeFormModal
          recipe={editingRecipe}
          onClose={() => {
            setShowForm(false);
            setEditingRecipe(null);
          }}
          isPopular={false}
        />
      )}
    </div>
  );
}

