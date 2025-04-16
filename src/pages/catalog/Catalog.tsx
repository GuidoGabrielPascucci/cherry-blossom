import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import {  } from "@assets/catalogo";

const productos = [
    {
        id: 1,
        nombre: "Remera Oversize",
        precio: "$5.200",
        imagen: "",
    },
    {
        id: 2,
        nombre: "Buzo Cherry Blossom",
        precio: "$8.700",
        imagen: "",
    },
    {
        id: 3,
        nombre: "Pantalón Cargo",
        precio: "$9.300",
        imagen: "",
    },
    {
        id: 4,
        nombre: "Campera de Jean",
        precio: "$11.000",
        imagen: "",
    },
];

function Catalog() {
    return (
        <>
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
        </>
    );
}

export default Catalog;
