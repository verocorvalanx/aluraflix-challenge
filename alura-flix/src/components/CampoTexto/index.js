import { useState } from "react"
import styles from "./campotexto.module.css"

function CampoTexto(props) {
    const [valor, setValor] = useState("")

    const manejarCambio = (e) => {

        props.setValor(e.target.value)
    }

    return (
        <div className={styles.campo}>
            <label>{props.titulo}</label>
            <input
                placeholder={props.placeholder}
                required
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default CampoTexto