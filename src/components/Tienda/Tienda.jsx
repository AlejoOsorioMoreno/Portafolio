import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';

export const Tienda = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const fetchData = async () => {
    try {
      const apiUrl = selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : 'https://fakestoreapi.com/products';

      const response = await fetch(apiUrl);
      const json = await response.json();

      setProducts(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]); // Actualiza productos cuando cambia la categoría seleccionada

  const handleCompra = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setCartCount(cartCount + 1);
  };


  return (
    <div>
      <Header cartCount={cartCount} selectedProducts={selectedProducts} />
      <div className='mt-60'>
        <div className='mb-4'>
          <div className='mb-4 flex flex-row gap-5 justify-center'>
            <button
              onClick={() => setSelectedCategory("")}
              className="px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Todas
            </button>
            <button
              onClick={() => setSelectedCategory("electronics")}
              className="px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Electrónicos
            </button>
            <button
              onClick={() => setSelectedCategory("men's clothing")}
              className="px-7 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Ropa
            </button>
            <button
              onClick={() => setSelectedCategory("jewelery")}
              className="px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Joyería
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {products.map((product) => (
            <div key={product.id} className='border p-4 shadow-md'>
              <div className='text-xl font-semibold'>{product.title}</div>
              <div className='text-gray-500'>{product.category}</div>
              <div className='text-blue-600 font-semibold mt-2'>
                ${product.price}
              </div>
              <img className='w-40 h-40 mt-4' src={product.image} alt={product.title} />
              <button
                className='bg-blue-500 text-white py-2 px-4 mt-4 hover:bg-blue-600'
                onClick={() => handleCompra(product)} // Pasar el producto actual a handleCompra
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

