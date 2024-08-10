import React from 'react';
import useFetch from '../Hooks/useFetch';
import { useTheme } from '../context/ThemeContext';

function Products() {
  const { isDarkMode } = useTheme();
  const { data: products, loading, error } = useFetch('https://dummyjson.com/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul>
        {products.products.map(product => (
          <li key={product.id} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
