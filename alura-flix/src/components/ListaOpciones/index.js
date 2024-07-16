import styles from "./listaopciones.module.css"

function ListaOpciones(e) {
  
console.log(e)

    return (
        <div className={styles.campo}>
            <label>Categoría</label>
            <select required>
                <option disabled value="" selected defaultValue="" hidden>Seleccione una categoría</option>
                <option>Front End</option>
                <option>Back End</option>
                <option>Innovación y Gestión</option>
            </select>
        </div>
    )
}

export default ListaOpciones