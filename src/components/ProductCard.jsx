import '../stylesheets/ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ img, nombre, tipo, precio, ...rest }) {
    return (
        <>
            <div className="card" {...rest}>
                <img src={img} alt={nombre} />
                <div className='description-card'>
                    <h3>{nombre}</h3>
                    <p className='parrafo-desc'><span>Tipo:</span> {tipo}</p>
                </div>
                <div className='buy-product'>
                    <span>${precio.toLocaleString()}</span>
                    <Link to={`/product/${id}`} className='btn-buy'>
                        Detalles
                    </Link>
                </div>
            </div>
        </>
    );
}