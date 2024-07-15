import Banner from "components/Banner";
import Card from "components/Card";
import Categoria from "components/Categoría";


function Inicio() {
    return (
        <>

            <Banner />
            <Categoria color="#6BD1FF" nombre="FRONT END" />
            <Card id="1" titulo="gato" imagen="https://cdn2.thecatapi.com/images/dng.jpg" />
            <Categoria color="#00C86F" nombre="BACK END" />
            <Categoria color="#FFBA05" nombre="INNOVACIÓN Y GESTIÓN" />

        </>
    )
}

export default Inicio;