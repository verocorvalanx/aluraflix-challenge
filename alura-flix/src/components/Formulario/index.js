import ListaOpciones from "components/ListaOpciones"
import styles from "./formulario.module.css"
import CampoTexto from "components/CampoTexto"
import Boton from "components/Boton"


function Formulario() {

const manejarEnvio = (e) => {
    e.preventDefault()
    console.log("Manejar el envío", e)
}

    return (
        <section className={styles.formulario}>
            <form onSubmit={manejarEnvio}>
                <div className={styles.header}>
                    <h1>NUEVO VIDEO</h1>
                    <h3>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>
                </div>

                <div className={styles.tarjeta}>
                    <h2>Crear Tarjeta</h2>

                    <div className={styles.campos}>
                        <CampoTexto titulo="Título" placeholder="Ingrese el título" />
                        <ListaOpciones />
                    </div>

                    <div className={styles.campos}>
                        <CampoTexto titulo="Imagen" placeholder="Ingrese el enlace de la imagen" />
                        <CampoTexto titulo="Video" placeholder="Ingrese el enlace del video" />
                    </div>

                    <div className={styles.botones}>
                        <Boton type="submit" nombre="GUARDAR" />
                        <Boton type="reset" nombre="LIMPIAR" />
                       
                    </div>
                </div>

            </form>
        </section>
    )
}

export default Formulario