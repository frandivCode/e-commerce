import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

/* Vistas */
import HomeView from './views/HomeView/Home';
import InfoView from './views/InfoView/Info';

/* Componentes */
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Carrito from './components/Carrito';
import TextSlider from './components/TextSlider';
import Carrousel from './components/Carrousel';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CheckOut from './components/CheckOut';
import { CartProvider } from "./context/CartContext";

function MainContent() {
  const location = useLocation();

  return (
    <>
      <div className='contenedor-principal'>
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/infobuyer" element={<InfoView />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Carrito />} />
          <Route path="/checkout/:orderId" element={<CheckOut />} />
        </Routes>
      </div>
      {location.pathname !== '/cart' && location.pathname !== '/infobuyer' && !location.pathname.startsWith('/checkout') && (
        <>
          <Carrousel />
          <TextSlider />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <MainContent />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
