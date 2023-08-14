import './Navbar.css'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><NavLink to='/'>Inicio</NavLink></li>
            <li><NavLink to='/Contact'>Counter</NavLink></li>
        </ul>
    </nav>
  )
}
