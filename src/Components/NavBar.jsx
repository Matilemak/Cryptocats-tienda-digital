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
                    <Link to="/Categoria/Personajes" className='nav-link'>Personajes</Link>
                    <Link to="/Categoria/Estructuras" className='nav-link'>Estructuras</Link>
                    <Link to="/Categoria/Mapas" className='nav-link'>Mapas</Link>
                    <Link to="/CartWidget"> <CartWidget /> </Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
        );
    }

export default NavBar;