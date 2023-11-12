import './App.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'

function App() {
  return (
    <>
      <div className="main">
        <NavBar />
        <ItemListContainer saludar='Bienvenido/a a la tienda de arte digital :)' />
      </div> 
    </>
  );
};

export default App
