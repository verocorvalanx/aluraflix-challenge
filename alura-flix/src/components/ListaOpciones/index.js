import styles from "./listaopciones.module.css"

function ListaOpciones() {
    return (
        <div className={styles.campo}>
            <label>Categoría</label>
            <select>
                <option disabled selected hidden>Seleccione una categoría</option>
                <option>Front End</option>
                <option>Back End</option>
                <option>Innovación y Gestión</option>
            </select>
        </div>
    )
}

export default ListaOpciones