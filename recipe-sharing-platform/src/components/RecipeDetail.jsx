import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center p-8 text-xl">Recipe not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline text-sm">&larr; Back to Recipes</Link>

      <div className="bg-white rounded-lg shadow-md mt-4 overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
