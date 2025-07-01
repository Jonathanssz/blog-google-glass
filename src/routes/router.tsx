import { Route, Routes, BrowserRouter } from "react-router-dom"

import Home from "../pages/Home"
import Especs from "../pages/Especs"
import Fotos from "../pages/Fotos";
import Multimidia from "../pages/Multimidia";
import Contato from "../pages/Contato";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/especs" element={<Especs />} />
                <Route path="/fotos" element={<Fotos />} />
                <Route path="/multimidia" element={<Multimidia />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
