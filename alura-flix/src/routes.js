import Footer from "components/Footer";
import Header from "components/Header";
import Inicio from "pages/Inicio";
import Nuevovideo from "pages/NuevoVideo";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/nuevovideo" element={<Nuevovideo />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes