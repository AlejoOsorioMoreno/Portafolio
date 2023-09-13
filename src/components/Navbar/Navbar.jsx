import './Navbar.css'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
        <ul className='flex items-center mr-40 text-lg'>
            <li><NavLink to='/'>Inicio</NavLink></li>
            <li><NavLink to='/AboutMe'>About</NavLink></li>
            <li><NavLink to='/ProjectsGit'>Projects</NavLink></li>
            <li><NavLink to='/Tienda'>Tienda</NavLink></li>
        </ul>
    </nav>
  )
}
