function ItemDetail({ product }) {
    return (
        <div>
            <h3>{product.nombre}</h3>
            <img src={product.img} alt={product.nombre} />
            <p>Tipo: {product.tipo}</p>
            <p>Precio: ${product.precio}</p>
            <p>Descripción: {product.descripcion}</p>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemDetail;