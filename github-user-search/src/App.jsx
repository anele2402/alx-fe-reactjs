
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import './App.css' 




  const App = () => {
  const handleSearch = (username) => {
    console.log('Searching for:', username);
  
  };

  return (
    <div>
       <Home/>
      
      <Search onSearch={handleSearch} />
     
    </div>
  );

  
}

export default App;
