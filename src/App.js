import './App.css';
import React from 'react';
import Header from './components/Header';
import Productlist from './components/Productlist';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Viewcard from './components/Viewcard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

      <Routes>
        <Route path='/' element={<Productlist/>} />
<Route path='/view-product/:id' element={<Viewcard/>}/>
      
      </Routes>

      </Router>
      
      
    </div>
  );
}

export default App;
