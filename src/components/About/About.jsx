import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';
import alejo from '../About/images/8a96f27a-cdc2-4e0b-bf57-d93da5fcfd5e.webp';
import '../About/About.css';
import css from './images/css-3.png'
import html from './images/html.png'
import javascript from './images/js.png'
import react from './images/react.png'
import java from './images/java.png'
import nodejs from './images/nodejs.png'
import { Footer } from '../Footer/Footer';

export const About = () => {
  return (
    <>
      <Header />
      <h1 className='text-center text-5xl mt-10 font-bold'>About Me</h1>
      <section id='Container' className='mt-36 flex'>
        <div id='left'>
          <NavLink to='/About'>
            <img
              id='img'
              className='ml-28 rounded-full bg-black'
              src={alejo}
              alt=''
            />
          </NavLink>
        </div>
        <div id='right' className='ml-20 self-center'>
          <h2 className='text-3xl font-bold '>Hi I´m Alejandro Osorio Moreno</h2>
          <p>an aspiring software developer currently honing my skills at SENA in</p>
          <p>software analysis and development. Since I wrote my first line of code,</p>
          <p>I´ve been captivated by the world of programming and its endless</p>
          <p>possibilities. As a student at SENA, I´m deepening my knowledge</p>
          <p>in software development and exploring various languages and</p>
          <p>technologies. From designing applications to solving coding puzzles, </p>
          <p>I´m on a constant quest for growth.</p>
        </div>
      </section>

      <section id='second-Container' className='block mt-48 mb-48'>
        <h2 className='text-5xl font-bold'>My Skills</h2>
        <div id='Icons' className='flex flex-row justify-around mt-24'>
          <div><img src={css} alt="" /></div>
          <div><img src={html} alt="" /></div>
          <div><img src={javascript} alt="" /></div>
          <div><img src={java} alt="" /></div>
          <div><img src={nodejs} alt="" /></div>
          <div><img src={react} alt="" /></div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

