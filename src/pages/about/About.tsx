import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import rocasImg from "@assets/rocas.avif";
import cherryImg from "@assets/logos/cherry-logo.png";

function About() {
    return (
        <>
            <Header />

            <section className="sobrenos-hero text-white d-flex align-items-center border border-danger">
                <Container className="text-center">
                    <h1 className="display-4 fw-bold">Sobre Nosotros</h1>
                    <p className="lead">
                        Conocé quiénes somos y qué nos inspira
                    </p>
                </Container>
            </section>

            <section className="py-5">
                <Container>
                    <Row className="mb-4">
                        <Col md={6}>
                            <h2 className="fw-semibold">Nuestra historia</h2>
                            <p>
                                Cherry Blossom nació con la idea de crear moda
                                urbana fresca, cómoda y con estilo. Desde 2023
                                trabajamos para ofrecer productos que
                                representen a quienes se animan a ser ellos
                                mismos.
                            </p>
                        </Col>
                        <Col md={6}>
                            <img
                                src={rocasImg}
                                alt="Nuestro equipo"
                                className="img-fluid rounded-3 shadow"
                            />
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col md={6}>
                            <img
                                src={cherryImg}
                                alt="Tienda Cherry Blossom"
                                className="img-fluid rounded-3 shadow"
                            />
                        </Col>
                        <Col
                            md={6}
                            className="d-flex flex-column justify-content-center"
                        >
                            <h2 className="fw-semibold">Misión & Visión</h2>
                            <p>
                                Queremos que cada persona que use nuestra ropa
                                se sienta libre, cómoda y auténtica. Buscamos
                                generar impacto positivo, apoyar el diseño local
                                y trabajar de forma sustentable.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-center">
                            <h3 className="mb-3">Gracias por formar parte</h3>
                            <p>
                                Cada compra, cada mensaje, cada like suma a este
                                sueño. Seguimos creciendo con vos 💕
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    );
}

export default About;
