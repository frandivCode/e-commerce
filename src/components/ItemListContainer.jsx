import { useEffect, useState } from 'react';
import { getCategory, getProducts } from '../asyncMock.js';
import ProductCard from './ProductCard.jsx';
import '../stylesheets/ProductCard.css';
import '../stylesheets/Cards.css';

function ItemListContainer({ categoria, titulo }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let productosFiltrados;

                if (categoria) {
                    productosFiltrados = await getCategory(categoria);
                } else {
                    productosFiltrados = await getProducts();
                }

                setProductos(productosFiltrados);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoria]);

    return (
        <>
            <div className='title-categoria'>
                <h2>{titulo}</h2>
            </div>

            {loading ? (
                <div className='loading-circle'>
                    <svg viewBox="25 25 50 50">
                        <circle r="20" cy="50" cx="50"></circle>
                    </svg>
                </div>
            ) : (
                <div className='contenedor-cards'>
                    {productos.length > 0 ? (
                        productos.map((producto) => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))
                    ) : (
                        <p>No hay productos disponibles en esta categoría.</p>
                    )}
                </div>
            )}
        </>
    );
}

export default ItemListContainer;