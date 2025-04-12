import { Container, Row, Col } from "react-bootstrap";
import { BsHeartFill, BsTruck, BsPatchCheckFill } from "react-icons/bs";

function Propuesta() {
    return (
        <section className="py-5 bg-white text-center border">
            <Container>
                <h2 className="mb-4">¿Por qué elegirnos?</h2>
                <Row className="justify-content-center py-5">
                    <Col xs={12} md={4} className="mb-4">
                        <BsHeartFill size={40} className="mb-2 text-danger" />
                        <h5>Moda con amor</h5>
                        <p>
                            Cada prenda está pensada con estilo, pasión y
                            personalidad.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="mb-4">
                        <BsTruck size={40} className="mb-2 text-primary" />
                        <h5>Envíos a todo el país</h5>
                        <p>Recibí tu pedido donde estés, rápido y seguro.</p>
                    </Col>
                    <Col xs={12} md={4} className="mb-4">
                        <BsPatchCheckFill
                            size={40}
                            className="mb-2 text-success"
                        />
                        <h5>Calidad garantizada</h5>
                        <p>
                            Prendas seleccionadas para que duren y te encanten.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Propuesta;
