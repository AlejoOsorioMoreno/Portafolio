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
          <Route path='/AboutMe' element={<About/>}/>
          <Route path='/ProjectsGit' element={<Project/>}> </Route>
          <Route path='/Tienda' element={<Tienda/>}> </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
