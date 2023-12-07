import NavBar from './Components/NavBar';
import CartWidget from './Components/CartWidget';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';
import Personajes from './Components/Personajes';
import PersonajesId from './Components/PersonajesId';
import Estructuras from './Components/Estructuras';
import Mapas from './Components/Mapas';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  
  return (
    <>
      <div className="main">
        <BrowserRouter>
        <NavBar />

          <Routes>

            <Route path={'/'} element={ <ItemListContainer /> } />
            <Route path={'/categoria/:id'} element={ <ItemListContainer /> } />
            <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />
            <Route path={'/PersonajesId/:id/:name'} element={ <PersonajesId /> } />
            <Route path={'/Personajes'} element={ <Personajes /> } />
            <Route path={'/Estructuras'} element={ <Estructuras /> } />
            <Route path={'/Mapas'} element={ <Mapas /> } />
            <Route path={'/CartWidget'} element={ <CartWidget /> } />
            <Route path={'*'} element={ <Error /> } />

          </Routes>

        </BrowserRouter>
      </div> 
    </>
  );
};

export default App
