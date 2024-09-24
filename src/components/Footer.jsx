import React from 'react';
import '../stylesheets/Footer.css';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#combos">Combos</a></li>
        <li><a href="#volver">Regresar</a></li>
      </ul>
      <div className="copy">
        <p>Creado por <a href="https://github.com/frandivCode">frandivCode</a></p>
        <p>Todos los derechos reservados.</p>
      </div>
      <div className='skew'></div>
      <div className='skew-dos'></div>
    </footer>
  );
}