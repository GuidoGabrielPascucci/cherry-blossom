import Destacados from "../../components/destacados/Destacados";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Propuesta from "../../components/propuesta/Propuesta";
import RedesCTA from "../../components/redes-cta/RedesCTA";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Destacados />
            <RedesCTA />
            <Gallery />
            <Propuesta />
            <Footer />
        </>
    );
}

export default Home;
