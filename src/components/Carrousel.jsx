import React from 'react';
import '../stylesheets/Carrousel.css';
import '../stylesheets/Mediaqueries.css';
import logoAbsolut from '../assets/logo-bebidas/absolut.png';
import logoGin from '../assets/logo-bebidas/gin.png';
import logoFernet from '../assets/logo-bebidas/fernet.png';
import logoSmirnoff from '../assets/logo-bebidas/smirnoff.png';
import logoSky from '../assets/logo-bebidas/sky.png';

const logoBebidas = [
  { src: logoAbsolut, alt: 'logoAbsolut' },
  { src: logoGin, alt: 'logoGin' },
  { src: logoFernet, alt: 'logoFernet' },
  { src: logoSmirnoff, alt: 'logoSmirnoff' },
  { src: logoSky, alt: 'logoSky' }
];

const Carrousel = () => {
  return (<>
    <section className='end-section'>
      <div className='slider'>
        <div className='slider-track'>
          <div className='slide'>
            <img src={logoAbsolut} alt={logoAbsolut} />
          </div>
          <div className='slide'>
            <img src={logoGin} alt={logoGin} />
          </div>
          <div className='slide'>
            <img src={logoFernet} alt={logoFernet} />
          </div>
          <div className='slide'>
            <img src={logoSmirnoff} alt={logoSmirnoff} />
          </div>
          <div className='slide'>
            <img src={logoSky} alt={logoSky} />
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default Carrousel;
