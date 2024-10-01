import { useEffect, useState } from 'react';
import { getCategory, getProducts } from '../asyncMock.js';
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
                            <div key={producto.id}>
                                <div className='card'>
                                    <img src={producto.img} alt={producto.nombre} />
                                    <div className='description-card'>
                                        <h3>{producto.nombre}</h3>
                                        <p className='parrafo-desc'><span>Tipo:</span> {producto.tipo}</p>
                                    </div>
                                    <div className='buy-product'>
                                        <span>${producto.precio.toLocaleString()}</span>
                                        <button className='btn-buy'>Detalles</button>
                                    </div>
                                </div>
                            </div>
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