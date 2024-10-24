import CartWidget from './CartWidget';
import '../stylesheets/NavBar.css';
import '../stylesheets/Mediaqueries.css';
import { Link } from 'react-router-dom';
import Menu from './HamburgerMenu';

export default function Navbar() {
  return (
    <header className='header-container'>
      <Link to={'/'} className='logo'>Altos Tragos</Link>
      <nav className='navbar'>
        <ul className='navbar-list-links'>
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
        <Menu />
      </nav>
      <CartWidget />
    </header>
  );
}

