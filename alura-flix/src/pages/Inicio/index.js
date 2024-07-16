import Banner from "components/Banner";
import Card from "components/Card";
import Categoria from "components/Categoría";


function Inicio() {
    return (
        <>

            <Banner />
            <Categoria color="#6BD1FF" categoria="FRONT END" />
            <Categoria color="#00C86F" categoria="BACK END" />
            <Categoria color="#FFBA05" categoria="INNOVACIÓN Y GESTIÓN" />

        </>
    )
}

export default Inicio;