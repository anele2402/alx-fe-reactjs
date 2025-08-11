import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Recipe List</h1>

      {/* Add Recipe Button */}
      <div className="text-center mb-8">
        <Link
          to="/add"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          + Add New Recipe
        </Link>
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
