import "./Contact.css";

function Contact() {
    return (
        <>
            <div className="container py-5">
                <h2 className="text-center mb-4">Contacto</h2>
                <p className="text-center text-muted mb-5">
                    ¿Querés hacer un pedido o tenés alguna consulta? Escribinos.
                </p>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Mensaje
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows={4}
                                    placeholder="Escribí tu mensaje..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Enviar
                            </button>
                        </form>

                        <hr className="my-4" />

                        <div className="d-flex flex-column align-items-center">
                            <p className="mb-2">
                                También podés contactarnos por:
                            </p>
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success mb-2"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="https://instagram.com/tu_cuenta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-dark"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
