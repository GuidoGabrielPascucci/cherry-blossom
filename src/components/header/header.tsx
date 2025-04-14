import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "@components";
import "../../index.css";
import "./header.css";

function Header() {
    return (
        <Navbar expand="md" bg="light" className="border">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Cherry Blossom
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav classes={["ms-auto"]} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
