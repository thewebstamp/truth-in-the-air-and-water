import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/homepage.jsx';
import Food from './pages/food/food.jsx';
import Chemtrails from './pages/chemtrails/chemtrails.jsx';
import Blog from './pages/blog/blog.jsx';
import Resources from './pages/resources/resources.jsx';
import Water from './pages/Water/Water.jsx';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/chemtrails' element={<Chemtrails />} />
          <Route path='/food' element={<Food />} />
          <Route path='/water' element={<Water />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </div>
    </HelmetProvider>
  )
}

export default App;