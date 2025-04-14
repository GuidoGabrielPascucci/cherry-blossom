import { Header, Footer } from "@components";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const productos = [
    {
        id: 1,
        nombre: "Remera Oversize",
        precio: "$5.200",
        imagen: "https://images.unsplash.com/photo-1618354691210-cb1c25c88a09",
    },
    {
        id: 2,
        nombre: "Buzo Cherry Blossom",
        precio: "$8.700",
        imagen: "https://images.unsplash.com/photo-1542062703-3f9f5f1d61eb",
    },
    {
        id: 3,
        nombre: "Pantalón Cargo",
        precio: "$9.300",
        imagen: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
    },
    {
        id: 4,
        nombre: "Campera de Jean",
        precio: "$11.000",
        imagen: "https://images.unsplash.com/photo-1616767356745-3d5f7a7c2c5c",
    },
];

function Catalog() {
    return (
        <>
            <Header />

            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-4">Catálogo</h1>
                    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                        {productos.map((producto) => (
                            <Col key={producto.id}>
                                <Card className="h-100 shadow-sm">
                                    <Card.Img
                                        variant="top"
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        style={{
                                            objectFit: "cover",
                                            height: "250px",
                                        }}
                                    />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>
                                            {producto.nombre}
                                        </Card.Title>
                                        <Card.Text className="text-muted">
                                            {producto.precio}
                                        </Card.Text>
                                        <Button
                                            variant="outline-dark"
                                            className="mt-auto"
                                            onClick={() =>
                                                alert(
                                                    "Funcionalidad próximamente 😉"
                                                )
                                            }
                                        >
                                            Ver más
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    );
}

export default Catalog;
