import Navbar from '../Navbar/Navbar'
import './Header.css'
import react from '../Layouts/Home/images/th.jpg'


export default function Header () {
  return (
      <>
      <section id='header'>
        <header className=' gap-20 '>
          <img className='w-20 h-30' src={react} alt="" />
          <h1 id='h1'>Alejandro Osorio Moreno</h1>
        </header>
        <Navbar/>
      </section>
      </>
      )
}
