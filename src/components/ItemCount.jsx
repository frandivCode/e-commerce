import React from 'react';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
    return (
        <div className='contenedor-compra'>
            <div className="contador-product">
                <button className='btn-contador-resta' onClick={handleRestar}>-</button>
                <span>{cantidad}</span>
                <button className='btn-contador-suma' onClick={handleSumar}>+</button>
            </div>
            <button className="add-carrito" onClick={handleAgregar}>
                <ion-icon name="cart-outline"></ion-icon>
                <p className="text-buy">Comprar</p>
            </button>
        </div>
    );
}

export default ItemCount;