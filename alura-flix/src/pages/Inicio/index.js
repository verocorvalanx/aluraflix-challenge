import Banner from "components/Banner";
import Categoria from "components/Categoría";
import Modal from "components/Modal";
import { useState } from "react";



function Inicio() {


    //const [videoSeleccionado, setVideoSeleccionado] = useState(null)

    return (
        <>

            <Banner />
            <Categoria color="#6BD1FF" categoria="FRONT END" />
            <Categoria color="#00C86F" categoria="BACK END" />
            <Categoria color="#FFBA05" categoria="INNOVACIÓN Y GESTIÓN" />
            <Modal /*video={videoSeleccionado} */ />
        </>
    )
}

export default Inicio;