import '../stylesheets/ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ producto }) {
    const { img, nombre, tipo, precio } = producto;
    return (
        <>
            <div className="card">
                <img src={img} alt={nombre} />
                <div className='description-card'>
                    <h3>{nombre}</h3>
                    <p className='parrafo-desc'><span>Tipo:</span> {tipo}</p>
                </div>
                <div className='buy-product'>
                    <span>${precio.toLocaleString()}</span>
                    <Link className='btn-buy' to={`/item/${producto.id}`}>Detalles</Link>
                </div>
            </div>
        </>
    );
}