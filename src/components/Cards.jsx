import { useState } from 'react';

import '../stylesheets/Cards.css';
import SearchBar from './SearchBar';

import imgFernet from '../assets/img/fernet.png';
import imgAbsolut from '../assets/img/absolut.png';
import imgDaniels from '../assets/img/whisky.png';
import imgRedLabel from '../assets/img/red-label.png';
import imgBlackLabel from '../assets/img/black-label.png';
import imgGoldLabel from '../assets/img/gold-label.png';
import imgSky from '../assets/img/sky.png';
import imgMalibu from '../assets/img/malibu.png';
import imgSmirnoff from '../assets/img/smirnoff.png';
import imgSmirnoffDos from '../assets/img/smirnoff-premium.png';
import imgSmirnoffTres from '../assets/img/smirnoff-tamarindo.png';
import imgRonDeLimon from '../assets/img/ron-de-limon.png';
import imgRonClassic from '../assets/img/ron.png';
import imgRonOro from '../assets/img/ron-carta-de-oro.png';
import imgAbsolutMango from '../assets/img/absolut-mango.png';
import imgChampagne from '../assets/img/champagne.png';
import imgCampari from '../assets/img/campari.png';
import imgGinebra from '../assets/img/ginebra.png';

const imagenes = {
  fernet: imgFernet,
  absolut: imgAbsolut,
  absolutMango: imgAbsolutMango,
  daniels: imgDaniels,
  redLabel: imgRedLabel,
  blackLabel: imgBlackLabel,
  goldLabel: imgGoldLabel,
  sky: imgSky,
  malibu: imgMalibu,
  smirnoff: imgSmirnoff,
  smirnoffDos: imgSmirnoffDos,
  smirnoffTres: imgSmirnoffTres,
  ronClassic: imgRonClassic,
  ronLemon: imgRonDeLimon,
  ronOro: imgRonOro,
  champagne: imgChampagne,
  campari: imgCampari,
  ginebra: imgGinebra
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
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    drinkType: ''
  });


  const productos = [
    { id: 1, img: imagenes.absolut, nombre: 'Absolut Classic', tipo: 'Vodka', precio: 22377 },
    { id: 2, img: imagenes.absolutMango, nombre: 'Absolut Mango', tipo: 'Vodka', precio: 19700 },
    { id: 3, img: imagenes.sky, nombre: 'Skyy Classic', tipo: 'Vodka', precio: 8000 },
    { id: 5, img: imagenes.smirnoffDos, nombre: 'Smirnoff Classic', tipo: 'Vodka', precio: 7000 },
    { id: 4, img: imagenes.smirnoff, nombre: 'Smirnoff Raspberry', tipo: 'Vodka', precio: 7800 },
    { id: 6, img: imagenes.smirnoffTres, nombre: 'Smirnoff Tamarindo', tipo: 'Vodka', precio: 7300 },
    { id: 7, img: imagenes.daniels, nombre: 'Jack Daniel´s', tipo: 'Whisky', precio: 49212 },
    { id: 8, img: imagenes.redLabel, nombre: 'Johnnie Walker Red Label', tipo: 'Whisky', precio: 32000 },
    { id: 9, img: imagenes.blackLabel, nombre: 'Johhnie Walker Black Label', tipo: 'Whisky', precio: 50000 },
    { id: 10, img: imagenes.goldLabel, nombre: 'Johhnie Walker Gold Label', tipo: 'Whisky', precio: 88000 },
    { id: 11, img: imagenes.malibu, nombre: 'Malibu', tipo: 'Ron', precio: 12845 },
    { id: 12, img: imagenes.ronClassic, nombre: 'Bacardí Carta Blanca', tipo: 'Ron', precio: 13000 },
    { id: 13, img: imagenes.ronLemon, nombre: 'Bacardi Limón', tipo: 'Ron', precio: 16000 },
    { id: 14, img: imagenes.ronOro, nombre: 'Bacardí Carta de Oro', tipo: 'Ron', precio: 18970 },
    { id: 15, img: imagenes.ginebra, nombre: 'Ginebra Gordon`s', tipo: 'Ginebra', precio: 11000 },
    { id: 16, img: imagenes.fernet, nombre: 'Fernet Branca', tipo: 'Amaro', precio: 10850 },
    { id: 17, img: imagenes.champagne, nombre: 'Champagne', tipo: 'Vino espumoso', precio: 29800 },
    { id: 18, img: imagenes.campari, nombre: 'Campari', tipo: 'Licor', precio: 10000 },
  ];

  const filteredProducts = productos.filter((producto) => {
    const matchesType = filters.drinkType ? producto.tipo.toLowerCase() === filters.drinkType.toLowerCase() : true;
    const matchesMinPrice = filters.minPrice ? producto.precio >= Number(filters.minPrice) : true;
    const matchesMaxPrice = filters.maxPrice ? producto.precio <= Number(filters.maxPrice) : true;

    return matchesType && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <article className='contenedor-products'>
      <div className='content-products'>
        <div class="border"></div>
        <h3 className='title-products'>Bebidas</h3>
        <p className='parragraph-products'>Para <span className='highlight'>disfrutar</span> el momento con buena gente.</p>
      </div>
      <SearchBar onFilter={setFilters} />
      <section className='contenedor-cards'>
        {filteredProducts.map((producto) => (
          <Card key={producto.id} {...producto} />
        ))}
      </section>
    </article>
  );
}
