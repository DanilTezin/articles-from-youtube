import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AlertSection from './components/Biz/AlertSection/AlertSection';
import Header from './components/Biz/Header/Header';
import ArticlesPage from './pages/ArticlesPage/Articles';
import GetbylinkPage from './pages/GetbylinkPage/GetbylinkPage';
import HomePage from './pages/HomePage/HomePage';
import LoadvidePage from './pages/LoadvideoPage/LoadvideoPage';


function App() {
  return (

    <div className="App">
      <Header/>
      <AlertSection/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/articles' element={<ArticlesPage/>}/>
        <Route path='/loadvideo' element={<LoadvidePage/>}/>
        <Route path='/articlelink' element={<GetbylinkPage/>}/>
        
      </Routes>      
    </div>
  );
}

export default App;
