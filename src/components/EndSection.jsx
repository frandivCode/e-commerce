import React from 'react';
import '../stylesheets/EndSection.css';

const EndSection = ({ children }) => {
  return (
    <section className='end-section'>
      <div className='slider'>
        <h3 className='slide-track'>¡Descubre nuestros imperdibles combos!</h3>
      </div>
      <div className='container-end'>
        <div className='contenedor-paragraphs'>
          {children}
        </div>
        <div className='container-button'>
          <button class="button-name" role="button">Ir a combos</button>
        </div>
      </div>
    </section>
  );
}

export default EndSection;
