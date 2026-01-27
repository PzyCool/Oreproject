import React, { useState, useEffect } from 'react';
import { X, Upload, Plus, Trash2 } from 'lucide-react';
import Button from './Button';
import { useRecipeStore } from '../store';
import toast from 'react-hot-toast';

const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

export default function RecipeFormModal({ recipe, onClose, isPopular }) {
  const { addRecipe, updateRecipe, isLoading } = useRecipeStore();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    difficulty: 'Beginner',
    prepTime: '',
    cookTime: '',
    yield: '',
    tags: [],
    heroImage: '',
    previewText: '',
    lockedContent: {
      ingredients: [''],
      steps: [''],
      tips: ['']
    },
    isPopular: isPopular
  });
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (recipe) {
      setFormData({
        ...recipe,
        price: recipe.price.toString(),
        lockedContent: {
          ingredients: recipe.lockedContent?.ingredients || [''],
          steps: recipe.lockedContent?.steps || [''],
          tips: recipe.lockedContent?.tips || ['']
        }
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleArrayChange = (field, index, value, nestedField = null) => {
    setFormData(prev => {
      const newArray = [...prev.lockedContent[field]];
      newArray[index] = value;
      return {
        ...prev,
        lockedContent: {
          ...prev.lockedContent,
          [field]: newArray
        }
      };
    });
  };

  const addArrayItem = (field, defaultValue = '') => {
    setFormData(prev => ({
      ...prev,
      lockedContent: {
        ...prev.lockedContent,
        [field]: [...prev.lockedContent[field], defaultValue]
      }
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      lockedContent: {
        ...prev.lockedContent,
        [field]: prev.lockedContent[field].filter((_, i) => i !== index)
      }
    }));
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedData = {
      ...formData,
      price: parseInt(formData.price) || 0,
      lockedContent: {
        ingredients: formData.lockedContent.ingredients.filter(i => i.trim()),
        steps: formData.lockedContent.steps.filter(s => s.trim()),
        tips: formData.lockedContent.tips.filter(t => t.trim())
      }
    };

    try {
      if (recipe) {
        await updateRecipe(recipe.id, cleanedData);
        toast.success('Recipe updated successfully');
      } else {
        await addRecipe(cleanedData);
        toast.success('Recipe added successfully');
      }
      onClose();
    } catch (error) {
      toast.error('Failed to save recipe');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-charcoal">
            {recipe ? 'Edit Recipe' : `Add New ${isPopular ? 'Popular Recipe' : 'Library Recipe'}`}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Recipe Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipe Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              placeholder="e.g., Classic Chocolate Chip Cookies"
            />
          </div>

          {/* Price & Difficulty */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (₦) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty *
              </label>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              >
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Prep Time, Cook Time, Yield */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prep Time
              </label>
              <input
                type="text"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                placeholder="e.g., 15 mins"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cook Time
              </label>
              <input
                type="text"
                name="cookTime"
                value={formData.cookTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                placeholder="e.g., 12 mins"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yield
              </label>
              <input
                type="text"
                name="yield"
                value={formData.yield}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                placeholder="e.g., 24 cookies"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                placeholder="Add a tag"
              />
              <Button type="button" onClick={addTag} variant="secondary">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-donut-brown text-white rounded-full text-sm flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 hover:text-red-300"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hero Image URL *
            </label>
            <div className="flex space-x-2">
              <input
                type="url"
                name="heroImage"
                value={formData.heroImage}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                placeholder="https://..."
              />
              {formData.heroImage && (
                <img
                  src={formData.heroImage}
                  alt="Preview"
                  className="w-12 h-12 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Preview Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preview Text *
            </label>
            <textarea
              name="previewText"
              value={formData.previewText}
              onChange={handleChange}
              required
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              placeholder="Brief description shown in recipe cards..."
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ingredients
            </label>
            {formData.lockedContent.ingredients.map((ingredient, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                  placeholder="Enter ingredient..."
                />
                {formData.lockedContent.ingredients.length > 1 && (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => removeArrayItem('ingredients', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="secondary"
              onClick={() => addArrayItem('ingredients')}
              className="mt-2"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Ingredient
            </Button>
          </div>

          {/* Steps */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Steps
            </label>
            {formData.lockedContent.steps.map((step, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                <span className="mt-2 text-sm font-medium text-gray-500 w-6">
                  {index + 1}.
                </span>
                <textarea
                  value={step}
                  onChange={(e) => handleArrayChange('steps', index, e.target.value)}
                  rows={2}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                  placeholder="Enter step..."
                />
                {formData.lockedContent.steps.length > 1 && (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => removeArrayItem('steps', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="secondary"
              onClick={() => addArrayItem('steps')}
              className="mt-2"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Step
            </Button>
          </div>

          {/* Tips */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tips
            </label>
            {formData.lockedContent.tips.map((tip, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={tip}
                  onChange={(e) => handleArrayChange('tips', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
                  placeholder="Enter a tip..."
                />
                {formData.lockedContent.tips.length > 1 && (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => removeArrayItem('tips', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="secondary"
              onClick={() => addArrayItem('tips')}
              className="mt-2"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Tip
            </Button>
          </div>

          {/* isPopular Toggle */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isPopular"
              id="isPopular"
              checked={formData.isPopular}
              onChange={handleChange}
              className="h-4 w-4 text-donut-brown focus:ring-donut-brown border-gray-300 rounded"
            />
            <label htmlFor="isPopular" className="ml-2 text-sm text-gray-700">
              {isPopular ? 'In Popular Recipes' : 'Mark as Popular Recipe'}
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="secondary" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : (recipe ? 'Update Recipe' : 'Add Recipe')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

