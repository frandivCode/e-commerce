import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CheckOut() {
    const { order } = useContext(CartContext);

    return (
        <>
            <h2 style={{ fontFamily: 'monospace' }}>¡GRACIAS POR TU COMPRA!</h2>
            {order ? (
                <>
                    <p>ID de la Orden: {order.id}</p>
                    <h4>Productos comprados:</h4>
                    <>
                        {order.items.map((item) => (
                            <div key={item.id}>
                                <p><strong>{item.titulo}</strong></p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio unitario: ${item.precio}</p>
                                <p>Subtotal: ${item.precio * item.quantity}</p>
                            </div>
                        ))}
                    </>
                    <h4 style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>PRECIO FINAL: ${order.total}</h4>
                    <h4>Datos del comprador:</h4>
                    <p><strong>Nombre Completo:</strong> {order.buyer.nombre}</p>
                    <p><strong>DNI:</strong> {order.buyer.dni}</p>
                    <p><strong>Email:</strong> {order.buyer.email}</p>
                    <p><strong>Dirección:</strong> {order.buyer.direccion}</p>
                    <p><strong>Localidad:</strong> {order.buyer.localidad}</p>
                    <p><strong>Código Postal:</strong> {order.buyer.cp}</p>
                    <p><strong>Fecha de Creación:</strong> {new Date(order.creadoEn).toLocaleString()}</p>
                </>
            ) : (
                <p>Cargando la información de la orden...</p>
            )}
            <p style={{ color: 'red', fontWeight: 'bold' }}>No válido como factura.</p>
            <Link to={'/'}>Volver al Home</Link>
        </>
    );
}