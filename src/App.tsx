import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Catalog from "./pages/catalog/Catalog";
import Contact from "./pages/contact/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/contactanos" element={<Contact />} />
            <Route path="sobre-nosotros" element={<About />} />
        </Routes>
    );
}

export default App;
