import { useState } from 'react';
import '../stylesheets/SearchBar.css';
import iconSearch from '../assets/search-outline.svg';

function SearchBar({ onFilter }) {

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [drinkType, setDrinkType] = useState('');

  const handleSearch = () => {
    onFilter({ minPrice, maxPrice, drinkType });
  };

  return (
    <div className='contenedor-search'>
      <form
        className='search-bar'
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
      >
        <img className='icon-search' src={iconSearch} alt="icono de búsqueda" />
        <input
          type="text"
          placeholder="Tipo de bebida"
          value={drinkType}
          className="input-drink input"
          onChange={(e) => setDrinkType(e.target.value)}
        />
        <div className='contenedor-select'>
          <select
            value={minPrice}
            className="select-min"
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value="">Precio Mínimo</option>
            <option value="5000">5,000</option>
            <option value="10000">10,000</option>
            <option value="15000">15,000</option>
            <option value="20000">20,000</option>
            <option value="30000">30,000</option>
          </select>

          <select
            value={maxPrice}
            className="select-max"
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="">Precio Máximo</option>
            <option value="10000">10,000</option>
            <option value="20000">20,000</option>
            <option value="30000">30,000</option>
            <option value="50000">50,000</option>
            <option value="100000">100,000</option>
          </select>
        </div>
        <button type="button" className="btn-search" onClick={handleSearch}>
          Buscar
        </button>
      </form>
    </div>
  );
}

export default SearchBar;