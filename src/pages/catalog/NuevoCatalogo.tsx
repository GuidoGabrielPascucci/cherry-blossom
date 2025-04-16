import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
    { id: 1, name: 'Campera Oversize', price: '$35.000', image: '/images/campera.jpg' },
    { id: 2, name: 'Remera Básica', price: '$12.000', image: '/images/remera.jpg' },
    { id: 3, name: 'Jean Mom', price: '$28.000', image: '/images/jean.jpg' },
];

const Catalog = () => {
    const phoneNumber = '5491123456789'; // Reemplazá con el número real, sin + ni espacios

    const getWhatsAppLink = (productName: string) => {
        const message = encodeURIComponent(`¡Hola! Estoy interesado/a en el producto: ${productName}`);
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    return (
        <Container className="py-5">
            <h2 className="mb-4 text-center">Catálogo</h2>
            <Row>
                {products.map((product) => (
                    <Col md={4} key={product.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                                <Button
                                    variant="success"
                                    href={getWhatsAppLink(product.name)}
                                    target="_blank"
                                >
                                    Comprar por WhatsApp
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Catalog;
