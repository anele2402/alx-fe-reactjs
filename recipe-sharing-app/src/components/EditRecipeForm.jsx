import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useRecipeStore from './recipeStore';

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === id);
  const [form, setForm] = useState(recipe || {});

  if (!recipe) return <p>Recipe not found.</p>;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(form);
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <textarea name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients" />
      <textarea name="instructions" value={form.instructions} onChange={handleChange} placeholder="Instructions" />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditRecipeForm;