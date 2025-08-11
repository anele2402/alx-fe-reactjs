import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split('\n').filter((line) => line.trim()).length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients.';
    }

    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split('\n').map((item) => item.trim()).filter(Boolean),
      instructions: steps,
      // Optional: generate an ID or send to backend
    };

    console.log('New Recipe:', newRecipe);

    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
    alert('Recipe added (demo only, not saved).');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recipe Title</label>
          <input
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.title ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Pancakes"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients (one per line)</label>
          <textarea
            rows="4"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.ingredients ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
            }`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g. 1 cup flour&#10;2 eggs"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preparation Steps</label>
          <textarea
            rows="5"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.steps ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
            }`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Write the steps here..."
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
