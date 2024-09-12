import CartWidget from './CartWidget';
import logo from '../assets/logo.png';
import '../stylesheets/NavBar.css';

function Navbar() {
  return (
    <header className='header-container'>
      <img className='logo' src={logo} alt="Logo" />
      <nav className='navbar'>
        <ul className='container-links'>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#about">Sobre nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
          <li><a href="#combos">Combos</a></li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default Navbar;