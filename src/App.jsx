import ItemListContainer from './Components/ItemListContainer';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CheckOut } from './Components/CheckOut';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import CartProvider from './Components/CartContext';


import Personajes from './Components/Personajes';
import PersonajesId from './Components/PersonajesId';
import Estructuras from './Components/Estructuras';
import Mapas from './Components/Mapas';

function App() {
  
  return (
    <>
      <div className="main">
        <BrowserRouter>

        <CartProvider>
        <NavBar />

          <Routes>

            <Route path={'/'} element={ <ItemListContainer /> } />
            <Route path={'/category/:id'} element={ <ItemListContainer /> } />
            <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />
            <Route path={'/PersonajesId/:id/:name'} element={ <PersonajesId /> } />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/checkout'} element={<CheckOut />} />
            
            <Route path={'/Personajes'} element={ <Personajes /> } />
            <Route path={'/Estructuras'} element={ <Estructuras /> } />
            <Route path={'/Mapas'} element={ <Mapas /> } />

            <Route path={'*'} element={ <Error /> } />

          </Routes>


        </CartProvider>
        </BrowserRouter>
      </div> 
    </>
  );
}

export default App;
