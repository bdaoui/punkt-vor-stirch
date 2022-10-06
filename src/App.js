import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Impressum from './pages/impressum';
import Landing from './pages/landing';
import Blog from './pages/blog'

function App() {
  return (
    <div className='App font-display'>
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/blog' element={<Blog />} />
    </Routes>
    </div>
  );
}

export default App;
