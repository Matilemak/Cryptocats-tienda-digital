import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
    return (
    <div className="navbar">
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <a href="#home">
                    <img src="./src/assets/logocc.png" className="logocc" alt="logo crypto cats"></img>
                </a>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="nav-links">
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Nav.Link href="#carrito"> <CartWidget /> </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
        );
    }

export default NavBar;