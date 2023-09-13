import Navbar from '../Navbar/Navbar';
import './Header.css';
import react from './images/React.png';

// eslint-disable-next-line react/prop-types
export default function Header({ cartCount }) {
  return (
    <>
      <section id='header' className='flex items-center '>
        <header className=' flex gap-20 '>
          <img className='w-60 h-70' src={react} alt='' />
          <h1 id='h1' className='flex items-center text-5xl'>
            Portafolio
          </h1>
        </header>
        <Navbar />
        {/* Mostrar el número de elementos en el carrito junto al emoji */}
        <div className='flex items-center'>
          <span role='img' aria-label='Carrito de Compras' className='text-2xl ml-4'>
            🛒
          </span>
          <span className='ml-2 text-xl'>{cartCount}</span>
        </div>
      </section>
    </>
  );
}
