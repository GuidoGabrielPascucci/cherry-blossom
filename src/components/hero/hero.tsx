// import "../../index.css";
// import "./hero.css";

// function Hero() {
//     return (
//         <>
//             <div className="border px-4 py-5">
//                 <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//                     <div className="col-10 col-sm-8 col-lg-6">
//                         <img
//                             src="../../public/morena.png"
//                             id="hero-img"
//                             className="d-block mx-lg-auto img-fluid"
//                             alt="Bootstrap Themes"
//                             loading="lazy"
//                         />
//                     </div>
//                     <div className="col-lg-6">
//                         <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 titulo">
//                             Cherry Blossom
//                         </h1>
//                         <h3>Florece a tu ritmo, vístete con tu esencia</h3>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Hero;

import { Carousel } from "react-bootstrap";
import "./Hero.css";

function Hero() {
    return (
        <div className="hero-carousel">
            <Carousel fade controls={false} indicators={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-img"
                        src="../../../public/morena.png"
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
                        src="../../../public/rubia2.png"
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
