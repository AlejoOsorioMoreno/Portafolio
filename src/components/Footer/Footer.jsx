








import './Footer.css'
import memojialejo from './images/alejomemoji.webp'

export const Footer = () => {
  return (
    <>
      <footer>
        <section className='grid justify-center text-center '>
          <h1 className='text-4xl tex font-bold mt-10'>Contact</h1>
          <p className='mt-6 font-semibold gap-4 text-lg'>Thank you for scrolling so far!</p>  
          <p className='text-lg'>Let´s get in touch</p>
        </section>
        <section className='flex justify-center pb-14 '>
        <div id='header-footer' >
          <div>
            <h2 className=' text-center mt-10 rounded-t-lg pt-5 pb-5 text-xl '>contact me</h2>
            </div>
            <div className='bg-gray-400 rounded-b-lg pb-'>
            <img  className='ml-36 mb-6 ' src={memojialejo} alt="" />
            <p>Always looking for new challenges and exciting </p>
            <p> opportunities in the world of </p>
            <p>programming. With a passion for </p>
            <p> solving problems and creating innovativesolutions.</p>
            <div className="mt-6">
              <p>Contacto: <a href="mailto:alejoosoriomoreno@gmail.com" className="text-blue-500">alejoosoriomoreno@gmail.com</a></p>
              <p>Conéctame en <a href="https://github.com/AlejoOsorioMoreno"  target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a></p>
              <p>Sígueme en <a href="https://www.instagram.com/alejol_0"  target="_blank" rel="noopener noreferrer" className="text-blue-500">Instagram</a></p>
            </div>
            </div>
            
          </div>
        </section>
        <div className=" bg-gray-800 text-white py-8 container mx-auto text-center">
            <p className="mt-6">&copy; {new Date().getFullYear()} Alejandro Osorio. Made with ☕ y 💻</p>
        </div>
      </footer>
    </>
  )
}
