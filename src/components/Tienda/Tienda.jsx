import Header from '../Header/Header';
import { useState, useEffect } from 'react';


export const Tienda = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
     <Header/>
     <div className='mt-48'>
      {products.map((product) => (
        <div className='border-solid border-black' key={product.id}>
          <div>
          {product.title}
          </div>
          <div>
          {product.category}
          </div>
          <div>
          {product.price}
          </div>
          <img className='w-10' src={product.image} alt="" />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Tienda;
