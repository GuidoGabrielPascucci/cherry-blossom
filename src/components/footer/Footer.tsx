import "./Footer.css";
import "../../index.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer mt-auto py-5">
            <Container className="">
                <Row className="align-items-center text-center text-md-start py-5">
                    <Col md={4} className="mb-5 mb-md-0">
                        <h5 className="mb-2 footer-title">Cherry Blossom</h5>
                        <p className="mb-0 footer-p">
                            Moda urbana con identidad propia.
                        </p>
                    </Col>
                    <Col md={4} className="mb-5 mb-md-0">
                        <h6 className="footer-subtitle">Enlaces</h6>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#catalogo" className="footer-link">
                                    Catálogo
                                </a>
                            </li>
                            <li>
                                <a href="#nosotros" className="footer-link">
                                    Sobre nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" className="footer-link">
                                    Contacto
                                </a>
                            </li>
                        </ul>
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
