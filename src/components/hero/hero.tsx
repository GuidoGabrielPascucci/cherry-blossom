import './hero.css';

function Hero() {
    return (
        <>
            <div className="border px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="../../public/morena.png" id="hero-img" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Cherry Blossom</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;