import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Navbar />
        <ItemListContainer
          greeting='¡El arte del buen beber te espera en Altos Tragos!'
        />
      </div>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;