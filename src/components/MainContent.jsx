import imgInicio from '../assets/img/martini.png';
import imgFlecha from '../assets/down-arrow.png';
import '../stylesheets/MainContent.css';
import Cards from './Cards';
import EndSection from './EndSection';
import TextSlider from './TextSlider';

export default function MainContent() {
  return (
    <main className='contenedor-main'>
      <section className='contenedor-bienvenida'>
        <div className='presentacion'>
          <h2>
            Encontrá aquí tus
            <span className='highlight'> tragos</span> o
            <span className='highlight'> bebidas</span> preferidas.
          </h2>
          <p className='parrafo-presentacion'><span className='highlight'>Disfruta</span> de una amplia selección de bebidas exclusivas para cualquier <span className="highlight">ocasión</span>.</p>
        </div>
        <img className='imgInicio' src={imgInicio} alt='Vaso con trago de martini' />
      </section>
      <div className='container-flecha'>
        <img className='flecha' src={imgFlecha} alt='Imagen de una flecha para abajo' id='#products' />
      </div>
      <Cards />
      <EndSection>
        <TextSlider />
      </EndSection>
    </main>
  );
}