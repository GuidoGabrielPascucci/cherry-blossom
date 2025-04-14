import { Container, Row, Col } from "react-bootstrap";
import oneImg from "@assets/one.avif"
import twoImg from "@assets/two.avif"
import threeImg from "@assets/three.avif"
import fourImg from "@assets/four.avif"
import fiveImg from "@assets/five.avif"
import sixImg from "@assets/six.avif"
import "./Gallery.css";

function Gallery() {
    return (
        <section className="" id="galeria">
            <Container>
                {/* <h2 className="text-center mb-4">Looks que amamos 💖</h2> */}
                <Row className="g-3">
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src={oneImg} alt="Look 1" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src={twoImg} alt="Look 2" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src={threeImg} alt="Look 3" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src={fourImg} alt="Look 4" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src={fiveImg} alt="Look 5" />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="galeria-img">
                            <img src={sixImg} alt="Look 6" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Gallery;
