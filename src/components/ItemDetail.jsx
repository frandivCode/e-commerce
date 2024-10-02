import { useState } from 'react';
import '../stylesheets/ItemDetail.css';

function ItemDetail({ product }) {

    const [cantidadProduct, setCantidadProduct] = useState(1);

    const incrementarCantidad = () => setCantidadProduct(cantidadProduct + 1);
    const decrementarCantidad = () => {
        if (cantidadProduct > 1) {
            setCantidadProduct(cantidadProduct - 1);
        }
    };

    return (
        <div className="contenedor-detalles">
            <div className='left-img'>
                <img src={product.img} alt={product.nombre} />
            </div>
            <div className='contenedor-product'>
                <div className='descripcion-product'>
                    <h3>{product.nombre}</h3>
                    <span className='precio-product'>${product.precio.toLocaleString()}</span>
                    <p><span className='description-text'>Descripción:</span> {product.descripcion}</p>
                </div>
                <div className='contenedor-compra'>
                    <div className='contador-product'>
                        <button onClick={decrementarCantidad} className='btn-contador-resta'>-</button>
                        <span>{cantidadProduct}</span>
                        <button onClick={incrementarCantidad} className='btn-contador-suma'>+</button>
                    </div>
                    <button className="add-carrito">
                        <ion-icon name="cart-outline"></ion-icon>
                        <p className="text-buy">Comprar</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;