import Footer from "components/Footer";
import Header from "components/Header";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import Nuevovideo from "pages/NuevoVideo";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/nuevovideo" element={<Nuevovideo />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes