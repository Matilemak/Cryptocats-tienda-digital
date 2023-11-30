import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import Logo from './Logo';

function NavBar() {
    return (
    <div className="navbar">
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand to='/'> <Logo/> </Navbar.Brand>
                <Nav className="nav-links">
                    <Link to="/">Productos</Link>
                    <Link to="/">Nosotros</Link>
                    <Link to="/">Contacto</Link>
                    <Link to="/"> <CartWidget /> </Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
        );
    }

export default NavBar;