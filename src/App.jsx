import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Layouts/Home/Home'
import { About } from './components/About/About'
import { Project } from './components/Projects/Project'
import { Tienda } from './components/Tienda/Tienda'
import { NotFound } from './components/NotFound/NotFound';


// import { Product } from './components/Product/Product';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' element={<Project/>}/>
          <Route path='/Tienda' element={<Tienda/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
