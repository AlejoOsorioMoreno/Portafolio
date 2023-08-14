import Navbar from '../Navbar/Navbar'
import './Header.css'
import react from './images/React.png'


export default function Header () {
  return (
      <>
      <section id='header' className='flex items-center '>
        <header className=' flex gap-20 '>
          <img className='w-60 h-70' src={react} alt="" />
          <h1 id='h1' className='flex items-center text-5xl'>Portafolio</h1>
        </header>
        <Navbar/>
      </section>
      </>
      )
}
