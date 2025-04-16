import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Catalog3 } from "@pages";
import { Layout } from "@components";
import "./App.css";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalog3 />} />
                <Route path="/sobre-nosotros" element={<About />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
        </Layout>
    );
}

export default App;
