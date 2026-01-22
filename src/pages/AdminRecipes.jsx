import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, ChefHat } from 'lucide-react';
import Button from '../components/Button';
import { useRecipeStore } from '../store';
import { formatCurrency } from '../lib/utils';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

export default function AdminRecipes() {
  const { recipes, fetchRecipes, removeRecipe, isLoading } = useRecipeStore();
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

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
        <h1 className="text-2xl font-bold text-charcoal">Manage Recipes</h1>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Recipe
        </Button>
      </div>

      {recipes.length === 0 ? (
        <div className="text-center py-12">
          <ChefHat className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-charcoal mb-4">No Recipes</h2>
          <p className="text-gray-600 mb-6">Start by adding your first recipe</p>
          <Button onClick={() => setShowForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Recipe
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
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recipes.map((recipe) => (
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
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => {
                            setEditingRecipe(recipe);
                            setShowForm(true);
                          }}
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

      {/* Recipe Form Modal would go here */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">
              {editingRecipe ? 'Edit Recipe' : 'Add New Recipe'}
            </h2>
            <p className="text-gray-600 mb-4">
              Recipe form implementation would go here. This is a placeholder for the admin recipe management form.
            </p>
            <div className="flex justify-end space-x-3">
              <Button variant="secondary" onClick={() => {
                setShowForm(false);
                setEditingRecipe(null);
              }}>
                Cancel
              </Button>
              <Button onClick={() => {
                setShowForm(false);
                setEditingRecipe(null);
                toast.success('Recipe saved successfully!');
              }}>
                Save Recipe
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}