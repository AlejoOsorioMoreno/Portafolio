import  Header from '../../Header/Header'
import './Home.css'
import alejo from '../Home/images/CR7.webp'
export const Home = () => {
  return (
    <>
        <Header/>
    <main>
      <section id='Left'>
        <h2>Hola, Soy Alejandro Osorio Moreno</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quaerat? Numquam possimus itaque repellat est sit aut laborum nobis exercitationem ratione doloremque reprehenderit officia quia fuga provident, velit ab corporis?</p>
      </section>
      <section id='right'>
        <img id='Image' src={alejo} alt="" />

      </section>
    </main>

    <footer></footer>
    </>
  )
}
