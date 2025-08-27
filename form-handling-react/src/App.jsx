import React from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import formikForm from './components/FormikForm'

function App() {
  

  return (
    <>
      <div>
        <RegistrationForm/>
      </div>
      <div>
        <formikForm/>
      </div>
      
    </>
  )
}

export default App
