import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Lock, Check } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { useRecipeStore } from '../store';

export default function RecipeCard({ recipe }) {
  const hasPurchasedRecipe = useRecipeStore((state) => state.hasPurchasedRecipe);

  const isPurchased = hasPurchasedRecipe(recipe.id);

  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="bg-white rounded-2xl shadow-bakery overflow-hidden hover:shadow-bakery-lg transition-shadow duration-300 group block"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={recipe.heroImage}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-charcoal text-lg leading-tight line-clamp-2">
            {recipe.title}
          </h3>
          <div className="ml-2 flex-shrink-0">
            {isPurchased ? (
              <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                <Check className="h-3 w-3" />
                <span>Unlocked</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1 bg-blush-pink text-white px-2 py-1 rounded-full text-xs">
                <Lock className="h-3 w-3" />
                <span>Paid</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {recipe.previewText}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{recipe.yield}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-donut-brown">
            {formatCurrency(recipe.price)}
          </span>

          <span className={`px-2 py-1 text-xs rounded-full ${
            recipe.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            recipe.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {recipe.difficulty}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {recipe.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}