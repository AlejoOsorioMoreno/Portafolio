import  Header from '../../Header/Header'
import './Home.css'
import alejo from '../Home/images/Alejo.webp'
import Instagram from '../Home/images/instagram_1384031.png'
import GitHub from '../Home/images/github_2111432.png'
import Twitter from '../Home/images/Twitter.png'
import { NavLink } from 'react-router-dom'
export const Home = () => {
  return (
    <>
        <Header/>
    <main className='mt-20'>
      <section id='Left' className='w-1/2 ml-28 mt-48 font-semibold'>
        <p className='text-5xl '>Hi There</p>
        <p className='text-5xl mt-6'>I'm Alejandro <span id='LastName'>Osorio Moreno</span></p>
        <p className='text-3xl mt-6'>I am into <span id='Develop'>Web Develop</span></p>
        <button className='mt-6'><NavLink to='/About'>About Me</NavLink></button>
        <section className='flex gap-2 ml-1'>
          <a href=""><img className='w-8 mt-5' src={Instagram} alt=""/></a>
          <a href=""><img className='w-8 mt-5' src={GitHub} alt=""/></a>
          <a href=""><img className='w-8 mt-5' src={Twitter} alt=""/></a>
        </section>
      </section>
      <section id='right'>
        <img id='Image' src={alejo} alt="" />

      </section>
    </main>
    </>
  )
}
