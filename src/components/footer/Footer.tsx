import "./Footer.css";
import "../../index.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer mt-auto py-5">
            <Container>
                <Row className="align-items-center text-center text-md-start py-5">
                    <Col md={4} className="mb-5 mb-md-0">
                        <h5 className="mb-2 footer-title">Cherry Blossom</h5>
                        <p className="mb-0 footer-subtitle">
                            Moda urbana con identidad propia.
                        </p>
                    </Col>
                    <Col md={4} className="mb-5 mb-md-0">
                        <h6 className="footer-nav-title">Enlaces</h6>

                        <Nav>
                            <Nav.Link as={Link} to="/" className="">
                                Inicio
                            </Nav.Link>
                            <Nav.Link as={Link} to="/catalogo" className="">
                                Catalogo
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/sobre-nosotros"
                                className="nav-item-custom"
                            >
                                Sobre Nosotros
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contacto" className="">
                                Contacto
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="mb-5 mb-md-0">
                        <h6 className="footer-subtitle">Seguinos</h6>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-icon"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://wa.me/XXXXXXXXXXX"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-icon"
                            >
                                <FaWhatsapp size={24} />
                            </a>
                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-icon"
                            >
                                <FaTiktok size={24} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr className="my-3 border-light" />
                <Row className="py-3">
                    <Col className="text-center small footer-copyright">
                        © {new Date().getFullYear()} Cherry Blossom. Todos los
                        derechos reservados.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
