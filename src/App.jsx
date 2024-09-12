import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Navbar />
        <ItemListContainer
          saludo='¡El arte del buen beber te espera en Altos Tragos'
        />
      </div>
    </div>
  );
}

export default App;