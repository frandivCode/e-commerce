import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { getProduct } from '../../asyncMock.js';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const fetchedProduct = await getProduct(id);
            setProduct(fetchedProduct);
            setLoading(false);
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Cargando...</p>;

    return (
        <div>
            {product ? <ItemDetail product={product} /> : <p>Producto no encontrado.</p>}
        </div>
    );
};

export default ItemDetailContainer;

