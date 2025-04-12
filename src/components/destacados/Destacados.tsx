import "./Destacados.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Destacados() {
    return (
        <section className="py-5 bg-light" id="destacados">
            <Container>
                <h2 className="text-center mb-5">Destacados de la temporada</h2>
                <Row className="g-4">
                    <Col xs={12} md={4}>
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src="../../../public/bradhy.avif"
                                className="card-img"
                            />
                            <Card.Body>
                                <Card.Title>Campera Oversize</Card.Title>
                                <Card.Text>
                                    Estilo urbano, abrigo ligero. Disponible en
                                    varios colores.
                                </Card.Text>
                                <Button variant="dark" size="sm">
                                    Ver más
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src="../../../public/zara.avif"
                                className="card-img"
                            />
                            <Card.Body>
                                <Card.Title>Pantalón Jogger</Card.Title>
                                <Card.Text>
                                    Comodidad total para looks casuales o
                                    streetwear.
                                </Card.Text>
                                <Button variant="dark" size="sm">
                                    Ver más
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src="../../../public/img-asset.jpg"
                                className="card-img"
                            />
                            <Card.Body>
                                <Card.Title>Remera con diseño</Card.Title>
                                <Card.Text>
                                    Expresá tu estilo con prints únicos y telas
                                    premium.
                                </Card.Text>
                                <Button variant="dark" size="sm">
                                    Ver más
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Destacados;
