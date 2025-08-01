import { useState } from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  
  return (
    <>
      <div>
        <AddRecipeForm  />
      </div>
      <div>
        <RecipeList/>
      </div>
    </>
  )
}

export default App
