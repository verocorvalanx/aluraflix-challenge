import styles from "./categoria.module.css"

function Categoria({nombre, color}) {
    return (
        <div className={styles.categoria} style={{ backgroundColor: `${ color }` }}>
            <span className={styles.name}>{nombre}</span>
        </div>
    )
}

export default Categoria