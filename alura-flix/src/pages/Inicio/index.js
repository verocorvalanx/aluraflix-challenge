import Banner from "components/Banner";
import Card from "components/Card";
import Categoria from "components/Categoría";
import Modal from "components/Modal";


function Inicio() {
    return (
        <>

            <Banner />
            <Categoria color="#6BD1FF" categoria="FRONT END" />
            <Categoria color="#00C86F" categoria="BACK END" />
            <Categoria color="#FFBA05" categoria="INNOVACIÓN Y GESTIÓN" />
<Modal />
        </>
    )
}

export default Inicio;