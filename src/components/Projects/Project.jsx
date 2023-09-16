import Header from '../Header/Header'
import img1 from './images/Bleux.jpg'
import img2 from './images/Blueasy.jpg'
import img3 from './images/MUSIC.jpg'
export const Project = () => {
  return (
    <>
        <Header/>
        
        <div id='Projects' className='text-center text-3xl font-bold mt-60'>
            <h2>Welcome for my Projects</h2>
        </div>
        <section className='flex justify-around'>
        <section>
        <div  >
          <div>
            <h2 className=' text-center mt-10 rounded-t-lg pt-5 pb-5 text-2xl font-extrabold '>Bleux</h2>
            </div>
            <div>
            <img className='h-60 w-96' src={img1} alt="" />
            <p className='text-center mt-6'>Modeling of a web page called MUSIC, which I did<br/> 
            at SENA, to learn different knowledge in modeling <br/>
            and the use of html and css, with the help of GitHub <br/>
            and Netlify to upload the repository and deploy</p>
            </div>
            <div id='Buttons' className='flex justify-center mt-5'>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400'><a href="https://github.com/AlejoOsorioMoreno/MediaQueries.git">Source code</a></button>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400 ml-8'><a href="https://cute-lamington-802fd8.netlify.app/">View WebSide</a></button>
            </div>
          </div>
        </section>
        <section className='flex justify-center pb-14 '>
        <div id='' >
          <div>
            <h2 className=' text-center mt-10 rounded-t-lg pt-5 pb-5 text-2xl font-extrabold '>Blueasy</h2>
            </div>
            <div>
            <img className='h-60 w-96' src={img2} alt="" />
            <p className='text-center mt-6'>Modeling of a web page called MUSIC, which I did<br/> 
            at SENA, to learn different knowledge in modeling <br/>
            and the use of html and css, with the help of GitHub <br/>
            and Netlify to upload the repository and deploy</p>
            </div>
            <div id='Buttons' className='flex justify-center mt-5'>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400'><a href="https://github.com/AlejoOsorioMoreno/Blueasy.git" target="_blank" rel="noreferrer">Source code</a></button>

            <button className='rounded-e rounded-s p-3 bg-fuchsia-400 ml-8'><a href="https://cute-lamington-802fd8.netlify.app/" target="_blank" rel="noreferrer">View WebSide</a></button>
            </div>
          </div>
        </section>
        <section className='flex justify-center pb-14 '>
        <div id='' >
          <div>
            <h2 className=' text-center mt-10 rounded-t-lg pt-5 pb-5 text-2xl font-extrabold '>Music</h2>
            </div>
            <div>
            <img className='h-60 w-96' src={img3} alt="" />
            <p className='text-center mt-6'>Modeling of a web page called MUSIC, which I did<br/> 
            at SENA, to learn different knowledge in modeling <br/>
            and the use of html and css, with the help of GitHub a<br/>
            and Netlify to upload the repository and deploy</p>
            </div>
            <div id='Buttons' className='flex justify-center mt-5'>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400'><a href="https://github.com/AlejoOsorioMoreno/MUSIC.git">Source code</a></button>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400 ml-8'><a href="https://cute-lamington-802fd8.netlify.app/">View WebSide</a></button>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
