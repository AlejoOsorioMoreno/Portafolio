import Header from '../Header/Header'
import Music from './images/Music.png'
export const Project = () => {
  return (
    <>
        <Header/>
        <div id='Projects' className='text-center text-3xl font-bold mt-60'>
            <h2>Welcome for my Projects</h2>
        </div>
        <section className='flex justify-center pb-14 '>
        <div id='' >
          <div>
            <h2 className=' text-center mt-10 rounded-t-lg pt-5 pb-5 text-2xl font-extrabold '>Blueasy</h2>
            </div>
            <div>
            <img className='w-96' src={Music} alt="" />
            <p className='text-center mt-6'>Modeling of a web page called MUSIC, which I did<br/> 
            at SENA, to learn different knowledge in modeling <br/>
            and the use of html and css, with the help of GitHub <br/>
            and Netlify to upload the repository and deploy</p>
            </div>
            <div id='Buttons'>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400'><a href="https://github.com/AlejoOsorioMoreno/MUSIC.git"></a>Source code</button>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400 ml-8'><a href="https://cute-lamington-802fd8.netlify.app/"></a>View WebSide</button>
            </div>
          </div>
        </section>
        <section className='flex justify-center pb-14 '>
        <div id='' >
          <div>
            <h2 className=' text-center mt-10 rounded-t-lg pt-5 pb-5 text-2xl font-extrabold '>Blueasy</h2>
            </div>
            <div>
            <img className='w-96' src={Music} alt="" />
            <p className='text-center mt-6'>Modeling of a web page called MUSIC, which I did<br/> 
            at SENA, to learn different knowledge in modeling <br/>
            and the use of html and css, with the help of GitHub <br/>
            and Netlify to upload the repository and deploy</p>
            </div>
            <div id='Buttons'>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400'><a href="https://github.com/AlejoOsorioMoreno/MUSIC.git"></a>Source code</button>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400 ml-8'><a href="https://cute-lamington-802fd8.netlify.app/"></a>View WebSide</button>
            </div>
          </div>
        </section>
        <section className='flex justify-center pb-14 '>
        <div id='' >
          <div>
            <h2 className=' text-center mt-10 rounded-t-lg pt-5 pb-5 text-2xl font-extrabold '>Blueasy</h2>
            </div>
            <div>
            <img className='w-96' src={Music} alt="" />
            <p className='text-center mt-6'>Modeling of a web page called MUSIC, which I did<br/> 
            at SENA, to learn different knowledge in modeling <br/>
            and the use of html and css, with the help of GitHub <br/>
            and Netlify to upload the repository and deploy</p>
            </div>
            <div id='Buttons'>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400'><a href="https://github.com/AlejoOsorioMoreno/MUSIC.git"></a>Source code</button>
            <button className='rounded-e rounded-s p-3 bg-fuchsia-400 ml-8'><a href="https://cute-lamington-802fd8.netlify.app/"></a>View WebSide</button>
            </div>
          </div>
        </section>
    </>
  )
}
