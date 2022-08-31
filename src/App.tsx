import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Biz/Header/Header';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>      
    </div>
  );
}

export default App;
