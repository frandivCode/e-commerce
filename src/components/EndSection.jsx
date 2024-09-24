import React from 'react';
import '../stylesheets/EndSection.css';

import logoAbsolut from '../assets/logo-bebidas/absolut.png';
import logoGin from '../assets/logo-bebidas/gin.png';
import logoJhonnieWalker from '../assets/logo-bebidas/jhonnie-walker.png';
import logoMalibu from '../assets/logo-bebidas/malibu.png';
import logoFernet from '../assets/logo-bebidas/fernet.png';
import logoSmirnoff from '../assets/logo-bebidas/smirnoff.png';
import logoCoca from '../assets/logo-bebidas/coca-cola.png';
import logoSky from '../assets/logo-bebidas/sky.png';

const logoBebidas = [
  { src: logoAbsolut, alt: 'logoAbsolut' },
  { src: logoGin, alt: 'logoGin' },
  { src: logoJhonnieWalker, alt: 'logoJhonnieWalker' },
  { src: logoMalibu, alt: 'logoMalibu' },
  { src: logoFernet, alt: 'logoFernet' },
  { src: logoSmirnoff, alt: 'logoSmirnoff' },
  { src: logoCoca, alt: 'logoCoca' },
  { src: logoSky, alt: 'logoSky' }
];

const EndSection = ({ children }) => {
  return (<>
    <div className='slider'>
      <div className='slider-track'>
        <div className='slide'>
          <img src={logoAbsolut} alt={logoAbsolut} />
        </div>
        <div className='slide'>
          <img src={logoGin} alt={logoGin} />
        </div>
        <div className='slide'>
          <img src={logoJhonnieWalker} alt={logoJhonnieWalker} />
        </div>
        <div className='slide'>
          <img src={logoMalibu} alt={logoMalibu} />
        </div>
        <div className='slide'>
          <img src={logoFernet} alt={logoFernet} />
        </div>
        <div className='slide'>
          <img src={logoSmirnoff} alt={logoSmirnoff} />
        </div>
        <div className='slide'>
          <img src={logoCoca} alt={logoCoca} />
        </div>
        <div className='slide'>
          <img src={logoSky} alt={logoSky} />
        </div>
      </div>
    </div>

    <section className='end-section'>
      <div className='container-end'>
        <div className='contenedor-paragraphs'>
          {children}
        </div>
        <div className='container-button'>
          <button class="button-name" role="button">Ir a combos</button>
        </div>
      </div>
    </section>
  </>
  );
}

export default EndSection;
