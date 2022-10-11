import './App.css';
import React, { useContext } from 'react'
import { Route, Routes} from 'react-router-dom'
import Impressum from './pages/impressum';
import Landing from './pages/landing';
import Blog from './pages/blog'
import Login from './components/login';
import Dashboard from './pages/dashboard';
import ConfigOutlet from './context/configOutlet';
import {AuthContext} from './context/auth.context';

function App() {

  const {isLoggedIn} = useContext(AuthContext)
  return (
    <div className='App font-display'>
    <Routes>
        <Route element={<ConfigOutlet />}>
          <Route path='/' element={<Landing />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/admin/login" element={<Login />} />
{isLoggedIn &&
          <Route path="/admin/dashboard" element={<Dashboard />} />
}
        </Route>
    </Routes>
    </div>
  );
}

export default App;
