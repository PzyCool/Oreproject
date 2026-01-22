import React, { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useRecipeStore } from '../store';

export default function Recipes() {
  const { recipes, isLoading, fetchRecipes } = useRecipeStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  // Get unique tags from all recipes
  const allTags = [...new Set(recipes.flatMap(recipe => recipe.tags))];

  // Filter recipes
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = !searchQuery ||
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.previewText.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDifficulty = !selectedDifficulty || recipe.difficulty === selectedDifficulty;

    const matchesTags = selectedTags.length === 0 ||
      selectedTags.some(tag => recipe.tags.includes(tag));

    return matchesSearch && matchesDifficulty && matchesTags;
  });

  const handleTagToggle = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-charcoal mb-4">Recipe Library</h1>
        <p className="text-xl text-gray-600">Unlock Auntie's secret family recipes</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedDifficulty || ''}
              onChange={(e) => setSelectedDifficulty(e.target.value || null)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
            >
              <option value="">All Difficulties</option>
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-donut-brown text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Recipes Grid */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>
      ) : filteredRecipes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No recipes found matching your criteria.</p>
          {(searchQuery || selectedDifficulty || selectedTags.length > 0) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDifficulty(null);
                setSelectedTags([]);
              }}
              className="mt-4 text-donut-brown hover:text-opacity-80 font-medium"
            >
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          {/* Results count */}
          <div className="mt-8 text-center text-gray-600">
            Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
          </div>
        </>
      )}
    </div>
  );
}