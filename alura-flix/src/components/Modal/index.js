import Boton from "components/Boton"
import styles from "./modal.module.css"
import CampoTexto from "components/CampoTexto"
import iconCancel from "./cancel.png"
import { useState } from "react"

function Modal(/*{ video }*/) {


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
        <dialog open={true} className={styles.modal}>

            <img src={iconCancel} className={styles.iconCancel} />

            <div className={styles.container}>

                <h1 className={styles.title}>EDITAR CARD:</h1>

                <form method="dialog" onSubmit={manejarEnvio}>
                    <div className={styles.form}>

                        <CampoTexto
                            titulo="Título"
                            placeholder="Ingrese el título"
                            valor={titulo}
                            setValor={setTitulo}
                            color="#2271D1"


                        />
                        <CampoTexto
                            titulo="Categoría"
                            placeholder="Ingrese una categoría: Front End, Back End o Innovación"
                            valor={categoria}
                            setValor={setCategoria}
                            color="#2271D1"
                        />



                        <CampoTexto
                            titulo="Video"
                            placeholder="Ingrese el enlace del video"
                            valor={video}
                            setValor={setVideo}
                            color="#2271D1"
                        />

                    </div>
                    <div className={styles.botones}>
                        <Boton type="submit" nombre="GUARDAR" />
                        <Boton type="reset" nombre="LIMPIAR" />
                    </div>
                </form>

            </div>
        </dialog>
    )
}

export default Modal