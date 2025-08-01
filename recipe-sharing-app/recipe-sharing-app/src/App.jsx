import { useState } from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {


  return (
    
    
    <div>
      <h1>Lets Share Some Recipes!</h1>
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}

export default App;
