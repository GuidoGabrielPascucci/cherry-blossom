import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";

function Gallery() {
    return (
        <section className="" id="galeria">
            <Container>
                {/* <h2 className="text-center mb-4">Looks que amamos 💖</h2> */}
                <Row className="g-3">
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src="../../../one.avif" alt="Look 1" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src="../../../two.avif" alt="Look 2" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src="../../../three.avif" alt="Look 3" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src="../../../four.avif" alt="Look 4" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src="../../../five.avif" alt="Look 5" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src="../../../six.avif" alt="Look 6" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Gallery;
