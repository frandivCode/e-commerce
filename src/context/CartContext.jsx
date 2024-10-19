import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [stock, setStock] = useState({});

    const actualizarStock = (productId, nuevoStock) => {
        setStock((prevStock) => ({
            ...prevStock,
            [productId]: nuevoStock
        }));
    };

    const restaurarStock = () => {
        carrito.forEach(item => {
            actualizarStock(item.id, item.stock);
        });
    };

    const agregarAlCarrito = (product, cantidad) => {
        const itemAgregado = { ...product, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((product) => product.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);

        const stockDisponible = stock[product.id] !== undefined ? stock[product.id] : product.stock;
        actualizarStock(product.id, stockDisponible - cantidad);
    };

    const removeItem = (item) => {
        const updatedCart = carrito.filter(cartItem => cartItem.id !== item.id);
        setCarrito(updatedCart);
    };

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    };

    const vaciarCarrito = () => {
        restaurarStock();
        setCarrito([]);
    };

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito,
            removeItem,
            stock,
            actualizarStock
        }}>
            {children}
        </CartContext.Provider>
    );
};
