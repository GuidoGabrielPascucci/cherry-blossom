import "../../index.css";
import "./header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar expand="md" bg="light" className="border">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Cherry Blossom
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/catalogo" className="nav-link">
                            Catálogo
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contactanos"
                            className="nav-link"
                        >
                            Contactanos
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/sobre-nosotros"
                            className="nav-link"
                        >
                            Sobre nosotros
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
