import React from 'react';
import '../stylesheets/Footer.css';
import '../stylesheets/Mediaqueries.css';
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
        <p>By <a href="https://github.com/frandivCode">frandivCode</a>.</p>
        <span className='create-react'>Realizado en React<ion-icon name="logo-react"></ion-icon></span>
      </div>
      <div className='skew'></div>
    </footer>
  );
}