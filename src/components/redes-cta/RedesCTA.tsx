import { Container } from "react-bootstrap";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import "./RedesCTA.css";

function RedesCTA() {
    return (
        <section className="cta-redes text-white py-5">
            <Container className="text-center py-5 border-top border-bottom">
                <h2 className="mb-3 redes-cta-title">¿Ya nos seguís?</h2>
                <p className="mb-4 fs-5">
                    Sumate a nuestra comunidad para no perderte lanzamientos,
                    descuentos y más.
                </p>
                <div className="d-flex justify-content-center gap-4">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-icon"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={32} />
                    </a>
                    <a
                        href="https://wa.me/XXXXXXXXXXX"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-icon"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={32} />
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-icon"
                        aria-label="TikTok"
                    >
                        <FaTiktok size={32} />
                    </a>
                </div>
            </Container>
        </section>
    );
}

export default RedesCTA;
