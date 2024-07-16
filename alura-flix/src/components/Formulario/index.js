import ListaOpciones from "components/ListaOpciones"
import styles from "./formulario.module.css"
import CampoTexto from "components/CampoTexto"
import Boton from "components/Boton"
import { useState } from "react"


function Formulario() {

    const [titulo, setTitulo] = useState("")
    const [video, setVideo] = useState("")
    const [categoria, setCategoria] = useState("")



    const manejarEnvio = (e) => {

        e.preventDefault();
        e.target.reset()


        let datosAEnviar = {
            titulo: titulo.toLowerCase().trim(),
            video: video.toLowerCase().trim(),
            categoria: categoria.toLowerCase().trim().replace(" ", "")
        }

        console.log(datosAEnviar)

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
                        <CampoTexto
                            titulo="Título"
                            placeholder="Ingrese el título"
                            valor={titulo}
                            setValor={setTitulo}
                            color="#262626"
                        />
                        <CampoTexto
                            titulo="Categoría"
                            placeholder="Ingrese una categoría: Front End, Back End o Innovación"
                            valor={categoria}
                            setValor={setCategoria}
                            color="#262626"

                        />
                    </div>

                    <div className={styles.campos}>

                        <CampoTexto
                            titulo="Video"
                            placeholder="Ingrese el enlace del video"
                            valor={video}
                            setValor={setVideo}
                            color="#262626"

                        />
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