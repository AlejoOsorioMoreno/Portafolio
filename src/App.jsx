import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Layouts/Home/Home'
import { Contact} from './components/Contact/Contact'
import { NotFound } from './components/NotFound/NotFound';

// import { Product } from './components/Product/Product';

function App() {

  return (
    <>
      <Home/> 
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
