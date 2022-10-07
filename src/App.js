import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Impressum from './pages/impressum';
import Landing from './pages/landing';
import Blog from './pages/blog'
import Login from './components/login';

function App() {
  return (
    <div className='App font-display'>
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/admin/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
