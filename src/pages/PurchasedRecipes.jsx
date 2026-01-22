import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ExternalLink, Download } from 'lucide-react';
import Button from '../components/Button';
import { useRecipeStore } from '../store';
import { formatCurrency } from '../lib/utils';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

export default function PurchasedRecipes() {
  const { purchasedRecipes, fetchPurchasedRecipes, isLoading } = useRecipeStore();

  useEffect(() => {
    fetchPurchasedRecipes();
  }, [fetchPurchasedRecipes]);

  const handleDownload = (recipe) => {
    // Simulate PDF download
    toast.success(`${recipe.title} PDF download started!`);
    // In a real app, this would trigger a file download
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (purchasedRecipes.length === 0) {
    return (
      <div className="text-center py-12">
        <ChefHat className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-charcoal mb-4">No Recipes Purchased</h2>
        <p className="text-gray-600 mb-6">You haven't purchased any recipes yet. Browse our collection to unlock delicious secrets!</p>
        <Link to="/recipes">
          <Button size="lg">Browse Recipes</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-charcoal">My Recipes</h1>
          <p className="text-gray-600">Access all your purchased recipes</p>
        </div>
        <Link to="/recipes">
          <Button variant="secondary">Browse More Recipes</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {purchasedRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-bakery overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={recipe.heroImage}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-2">{recipe.title}</h3>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">{recipe.difficulty}</span>
                <span className="text-sm font-medium text-green-600">Purchased</span>
              </div>

              <div className="space-y-3">
                <Link to={`/recipes/${recipe.id}`}>
                  <Button className="w-full" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Recipe
                  </Button>
                </Link>

                <Button
                  variant="secondary"
                  className="w-full"
                  size="sm"
                  onClick={() => handleDownload(recipe)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Purchase Price</span>
                  <span className="font-medium text-charcoal">{formatCurrency(recipe.price)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="bg-white rounded-lg shadow-bakery p-6">
        <h2 className="text-xl font-bold text-charcoal mb-4">Recipe Collection Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-donut-brown">{purchasedRecipes.length}</div>
            <div className="text-sm text-gray-600">Total Recipes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-donut-brown">
              {purchasedRecipes.filter(r => r.difficulty === 'Beginner').length}
            </div>
            <div className="text-sm text-gray-600">Beginner Recipes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-donut-brown">
              {formatCurrency(purchasedRecipes.reduce((total, recipe) => total + recipe.price, 0))}
            </div>
            <div className="text-sm text-gray-600">Total Invested</div>
          </div>
        </div>
      </div>
    </div>
  );
}