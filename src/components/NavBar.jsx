import CartWidget from './CartWidget';
import '../stylesheets/NavBar.css';
import '../stylesheets/Mediaqueries.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='header-container'>
      <Link to={'/'} className='logo'>Altos Tragos</Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="category/bebidas">Bebidas</Link>
          </li>
          <li>
            <Link to="category/cocteleria">Cocteleria</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

