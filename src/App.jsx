import NavBar from './Components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';
import Productos from './Components/Productos';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';


function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element=    {<ItemListContainer />} />
            <Route path='/' element={ <Productos />} />
            <Route path='/' element={ <Nosotros />} />
            <Route path='/' element={ <Contacto />} />
          </Routes>

        {/* <Footer /> */}
        </BrowserRouter>
      </div> 
    </>
  );
};

export default App
