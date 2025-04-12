import { Container, Row, Col, Card, Button } from "react-bootstrap";

const productos = [
    {
        nombre: "Remera Oversize",
        precio: 9500,
        imagen: "/img/remera-oversize.jpg",
    },
    {
        nombre: "Jean Mom Fit",
        precio: 13500,
        imagen: "/img/jean-momfit.jpg",
    },
    {
        nombre: "Campera Denim",
        precio: 18000,
        imagen: "/img/campera-denim.jpg",
    },
];

function Catalogo() {
    return (
        <section id="catalogo" className="py-5 bg-light">
            <Container>
                <h2 className="mb-4 text-center">Catálogo</h2>
                <Row>
                    {productos.map((producto, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={producto.imagen} />
                                <Card.Body>
                                    <Card.Title>{producto.nombre}</Card.Title>
                                    <Card.Text>
                                        ${producto.precio.toLocaleString()}
                                    </Card.Text>
                                    <Button
                                        variant="success"
                                        href="https://wa.me/XXXXXXXXXXX"
                                        target="_blank"
                                    >
                                        Comprar
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Catalogo;
