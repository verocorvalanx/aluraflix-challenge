import styles from "./campotexto.module.css"

function CampoTexto(props) {
    return (
        <div className={styles.campo}>
            <label>{props.titulo}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto