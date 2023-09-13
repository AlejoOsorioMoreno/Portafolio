import { useState, useEffect } from 'react';
import Header from '../Header/Header';

export const Tienda = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCompra = () => {
    setCartCount(cartCount + 1);
  };
   return (
    <div>
      <Header cartCount={cartCount} /> {/* Pasa el contador del carrito como prop al Header */}
      <div className='mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {products.map((product) => (
            <div key={product.id} className='border p-4 shadow-md'>
              <div className='text-xl font-semibold'>{product.title}</div>
              <div className='text-gray-500'>{product.category}</div>
              <div className='text-blue-600 font-semibold mt-2'>
                ${product.price}
              </div>
              <img className='w-full mt-4' src={product.image} alt={product.title} />
              <button
                className='bg-blue-500 text-white py-2 px-4 mt-4 hover:bg-blue-600'
                onClick={handleCompra} // Llama a la función handleCompra al hacer clic en el botón
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tienda;
