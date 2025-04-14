import { Nav as _Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";

type NavProps = {
    classes?: string[]
};

function Nav({ classes }: NavProps) {
    return (
        <_Nav className={classes?.join(' ')}>
            <_Nav.Link as={Link} to="/">
                Inicio
            </_Nav.Link>
            <_Nav.Link as={Link} to="/catalogo">
                Catalogo
            </_Nav.Link>
            <_Nav.Link as={Link} to="/sobre-nosotros">
                Sobre Nosotros
            </_Nav.Link>
            <_Nav.Link as={Link} to="/contacto">
                Contacto
            </_Nav.Link>
        </_Nav>
    )
}

export default Nav;