import '../stylesheets/Cards.css';
import { getProducts } from '../asyncMock.js';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';

export default function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);


  return (
    <article className='contenedor-products'>
      <section className='contenedor-cards'>
        {products.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </section>
    </article>
  );
}
