import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ImgCarrito from '../assets/img/shopping-cart.png';
import '../stylesheets/Carrito.css';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito, removeItem } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    };

    const handleClickRemoveId = (prod) => {
        removeItem(prod);
    };

    return (
        <div className="container-carrito">
            <div className="content-carrito">
                <h1>Carro de compras</h1>
                <img className="img-carrito" src={ImgCarrito} alt="carrito de compras" />
            </div>
            {carrito.length > 0 ? (
                <>
                    <table className="tabla-content">
                        <thead>
                            <tr>
                                <th>IMAGEN</th>
                                <th>PRODUCTO</th>
                                <th>CANTIDAD</th>
                                <th>PRECIO UNITARIO</th>
                                <th>SUBTOTAL</th>
                                <th>ELIMINAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((prod) => (
                                <tr key={prod.id}>
                                    <td><img src={prod.img} alt={prod.nombre} /></td>
                                    <td>
                                        <Link className="link-prod" to={`/producto/${prod.id}`}>
                                            <h3>{prod.nombre}</h3>
                                        </Link>
                                    </td>
                                    <td><p>{prod.cantidad}</p></td>
                                    <td>$ {prod.precio.toLocaleString()}</td>
                                    <td>$ {(prod.precio * prod.cantidad).toLocaleString()}</td>
                                    <td>
                                        <ion-icon
                                            name="close-outline"
                                            onClick={() => handleClickRemoveId(prod)} // Pasamos el producto al hacer clic
                                        ></ion-icon>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="container-vaciarCart">
                        <h2>Total a pagar: $ {precioTotal().toLocaleString()}</h2>
                        <button className="button-vaciar" onClick={handleVaciar}>Vaciar</button>
                    </div>
                </>
            ) : (
                <div className="cart-empty">
                    <h2>¡Tu carrito está <span className="empty-red">vacío!</span></h2>
                    <Link to={"/"}>
                        <button className="button">Seguir comprando
                            <ion-icon className="arrow" name="arrow-forward-outline"></ion-icon>
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Carrito;
