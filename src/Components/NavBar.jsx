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
                <Link className='logocc' to='/'> <Logo /> </Link>
                <Nav className="nav-links">
                    <Link to="/Personajes">Personajes</Link>
                    <Link to="/Estructuras">Estructuras</Link>
                    <Link to="/Mapas">Mapas</Link>
                    <Link to="/CartWidget"> <CartWidget /> </Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
        );
    }

export default NavBar;