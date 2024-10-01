import React from 'react';
import '../stylesheets/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to={'/'}>Inicio</Link>
        </li>
        <li>
          <Link to={'category/bebidas'}>Bebidas</Link>
        </li>
        <li>
          <Link to={'category/cocteleria'}>Cocteleria</Link>
        </li>
      </ul>
      <div className="copy">
        <p>Creado por <a href="https://github.com/frandivCode">frandivCode</a></p>
        <p>Todos los derechos reservados.</p>
      </div>
      <div className='skew'></div>
    </footer>
  );
}