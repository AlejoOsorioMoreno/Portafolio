import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Layouts/Home/Home'
import { Contact} from './components/Contact/Contact'
import { Skills } from './components/Skills/Skills.jsx'
import { About } from './components/About/About'
import { NotFound } from './components/NotFound/NotFound';

// import { Product } from './components/Product/Product';

function App() {

  <div className="..........................................3
  "></div>
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
