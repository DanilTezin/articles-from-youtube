import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Biz/Header/Header';
import Articles from './pages/Articles/Articles';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>      
    </div>
  );
}

export default App;
