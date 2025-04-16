import morenaImg from "@assets/home/morena.png"
import blondaImg from "@assets/home/rubia2.png"

import { Carousel } from "react-bootstrap";
import "./Hero.css";

function Hero() {
    return (
        <div className="hero-carousel">
            <Carousel fade controls={false} indicators={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-img"
                        src={morenaImg}
                        alt="Primera prenda"
                    />
                    <Carousel.Caption>
                        <h3>Estilo urbano</h3>
                        <p>Conseguí tu look ideal</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-img"
                        src={blondaImg}
                        alt="Segunda prenda"
                    />
                    <Carousel.Caption>
                        <h3>Comodidad y diseño</h3>
                        <p>Temporada otoño-invierno</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Hero;
