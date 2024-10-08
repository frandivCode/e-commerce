import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Vistas */
import ItemDetailContainer from './views/ItemDetailContainerView/ItemDetailContainer';
import Home from './views/HomeView/Home';

/* Componentes */
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import TextSlider from './components/TextSlider';
import Carrousel from './components/Carrousel';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='contenedor-principal'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
        <Carrousel />
        <TextSlider />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
