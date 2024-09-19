import '../stylesheets/Cards.css';

import imgFernet from '../assets/img/fernet.png';
import imgAbsolut from '../assets/img/absolut.png';
import imgDaniels from '../assets/img/whisky.png';
import imgRedLabel from '../assets/img/red-label.png';
import imgSky from '../assets/img/sky.png';
import imgMalibu from '../assets/img/malibu.png';
import imgSmirnoff from '../assets/img/smirnoff.png';
import imgSmirnoffDos from '../assets/img/smirnoff-classic.png';
import imgDrink from '../assets/img/drink.png';

const imagenes = {
  fernet: imgFernet,
  absolut: imgAbsolut,
  daniels: imgDaniels,
  redLabel: imgRedLabel,
  sky: imgSky,
  malibu: imgMalibu,
  smirnoffDos: imgSmirnoffDos,
  smirnoff: imgSmirnoff
};

const Card = ({ img, nombre, tipo, precio, ...rest }) => {
  return (
    <>
      <div className="card" {...rest}>
        <img src={img} alt={nombre} />
        <div className='description-card'>
          <h3>{nombre}</h3>
          <p className='parrafo-desc'><span>Tipo:</span> {tipo}</p>
        </div>
        <div className='buy-product'>
          <span>${precio.toLocaleString()}</span>
          <button className='btn-buy'><ion-icon name="cart-outline"></ion-icon></button>
        </div>
      </div>
    </>
  );
};

export default function Cards() {
  const productos = [
    { id: 1, img: imagenes.sky, nombre: 'Skyy Classic', tipo: 'Vodka', precio: 8000 },
    { id: 2, img: imagenes.absolut, nombre: 'Absolut Classic', tipo: 'Vodka', precio: 14000 },
    { id: 3, img: imagenes.daniels, nombre: 'Jack Daniel´s', tipo: 'Whisky', precio: 49212 },
    { id: 4, img: imagenes.redLabel, nombre: 'Johnnie Walker Red Label', tipo: 'Whisky', precio: 34558 },
    { id: 5, img: imagenes.malibu, nombre: 'Malibu', tipo: 'Ron', precio: 12845 },
    { id: 6, img: imagenes.fernet, nombre: 'Fernet Branca', tipo: 'Amaro', precio: 10850 },
    { id: 7, img: imagenes.smirnoff, nombre: 'Smirnoff Raspberry', tipo: 'Vodka', precio: 7200 },
    { id: 8, img: imagenes.smirnoffDos, nombre: 'Smirnoff Classic', tipo: 'Vodka', precio: 7000 }
  ];

  return (
    <article className='contenedor-products'>
      <div className='content-products'>
        <div class="border"></div>
        <h3 className='title-products'>Bebidas</h3>
        <p className='parragraph-products'>Para <span className='highlight'>disfrutar</span> el momento con buena gente. <img src={imgDrink} /></p>
      </div>
      <section className='contenedor-cards'>
        {productos.map((producto) => (
          <Card key={producto.id} {...producto} />
        ))}
      </section>
    </article>
  );
}
