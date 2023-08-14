import CR7 from '../Product/CR7.webp'

export const Product= () => {
  return (
    <body className= ' bg-black p-9 flex justify-center'>

    <div className='w-80 h-80 rounded-2xl bg-sky-50 mt-9 flex flex-col text-center'>
        <img className=' w-full h-1/2 rounded-t-lg object-cover ' src={CR7} alt="mgProduct" />
        <h2 className='rounded-lg bg-white w-20 ml-10 mt-10 mb-5'>Futbol</h2>
        <div className='w-full  file flex justify-evenly bg-slate-500 text-lg'>
            <p className='text-red-400 '>Cristiano Ronaldo</p>
            <p className='text-purple-700'>$Invaluable</p>
        </div>
    </div>
          
    </body>
  )
}