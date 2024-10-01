import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Vistas */
import CocteleriaView from './views/CocteleriaView/CocteleriaView';
import BebidasView from './views/BebidasView/BebidasView';
import ItemDetailContainer from './views/ItemDetailContainerView/ItemDetailContainer';
import Home from './views/HomeView/Home';

/* Componentes */
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import TextSlider from './components/TextSlider';
import Carrousel from './components/Carrousel';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='contenedor-principal'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/category/bebidas" element={<BebidasView />} />
            <Route exact path="/category/cocteleria" element={<CocteleriaView />} />
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
