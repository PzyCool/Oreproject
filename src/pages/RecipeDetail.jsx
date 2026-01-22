import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Clock, Users, ChefHat, Download } from 'lucide-react';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import { useRecipeStore } from '../store';
import { useAuthStore } from '../store';
import { formatCurrency } from '../lib/utils';
import toast from 'react-hot-toast';

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentRecipe, isLoading, fetchRecipeById, purchaseRecipe, hasPurchasedRecipe } = useRecipeStore();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [isPurchasing, setIsPurchasing] = useState(false);

  useEffect(() => {
    if (id) {
      fetchRecipeById(id);
    }
  }, [id, fetchRecipeById]);

  const isPurchased = hasPurchasedRecipe(id);

  const handlePurchase = async () => {
    if (!isAuthenticated()) {
      navigate('/login', { state: { from: `/recipes/${id}` } });
      return;
    }

    setIsPurchasing(true);
    try {
      await purchaseRecipe(id);
      toast.success('Recipe unlocked! You can now view the full recipe.');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPurchasing(false);
    }
  };

  const handleDownload = () => {
    // Simulate PDF download
    toast.success('Recipe PDF download started!');
    // In a real app, this would trigger a file download
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!currentRecipe) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
          <Button onClick={() => navigate('/recipes')}>Back to Recipes</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate('/recipes')}
        className="flex items-center space-x-2 text-gray-600 hover:text-donut-brown mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Recipes</span>
      </button>

      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-bakery overflow-hidden mb-8">
        <div className="aspect-video overflow-hidden">
          <img
            src={currentRecipe.heroImage}
            alt={currentRecipe.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-charcoal mb-2">{currentRecipe.title}</h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{currentRecipe.prepTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{currentRecipe.yield}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChefHat className="h-4 w-4" />
                  <span>{currentRecipe.difficulty}</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-donut-brown mb-2">
                {formatCurrency(currentRecipe.price)}
              </div>
              {isPurchased ? (
                <div className="flex items-center space-x-2 text-green-600">
                  <Lock className="h-4 w-4" />
                  <span className="text-sm font-medium">Unlocked</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-blush-pink">
                  <Lock className="h-4 w-4" />
                  <span className="text-sm font-medium">Locked</span>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {currentRecipe.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full capitalize"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Preview Text */}
          <div className="bg-cream p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-charcoal mb-3">Recipe Preview</h2>
            <p className="text-gray-700 leading-relaxed">{currentRecipe.previewText}</p>
          </div>
        </div>
      </div>

      {/* Paywall Section */}
      {!isPurchased ? (
        <div className="bg-white rounded-2xl shadow-bakery p-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blush-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-charcoal mb-2">Unlock This Recipe</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Get access to the full recipe including detailed ingredients, step-by-step instructions,
              and professional tips from Auntie's kitchen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-donut-brown mb-1">
                  {formatCurrency(currentRecipe.price)}
                </div>
                <div className="text-sm text-gray-500">One-time purchase</div>
              </div>

              <Button
                onClick={handlePurchase}
                disabled={isPurchasing}
                className="px-8"
              >
                {isPurchasing ? 'Processing...' : `Buy Recipe - ${formatCurrency(currentRecipe.price)}`}
              </Button>
            </div>

            {!isAuthenticated() && (
              <p className="text-sm text-gray-500 mt-4">
                You'll need to sign in to purchase recipes
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-bakery p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 text-green-600">
              <Lock className="h-5 w-5" />
              <span className="font-medium">Recipe Unlocked!</span>
            </div>
            <Button variant="secondary" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Ingredients</h2>
            <div className="bg-cream p-6 rounded-lg">
              <ul className="space-y-2">
                {currentRecipe.lockedContent.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-donut-brown rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Instructions</h2>
            <div className="space-y-4">
              {currentRecipe.lockedContent.steps.map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-8 h-8 bg-donut-brown text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Professional Tips</h2>
            <div className="bg-cream p-6 rounded-lg">
              <ul className="space-y-3">
                {currentRecipe.lockedContent.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ChefHat className="h-5 w-5 text-donut-brown mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}