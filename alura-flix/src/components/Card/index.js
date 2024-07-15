import styles from "./card.module.css"
import borrar from "./delete.png"
import editar from "./edit.png"

function Card({ id, imagen, categoria, titulo }) {
    return (
        <div className={styles.card}>
            <img src={imagen} alt={titulo} className={styles.imagen} />
            <div className={styles.footer}>
                <button> <img src={borrar} /> BORRAR</button>
                <button> <img src={editar} /> EDITAR</button>
            </div>
        </div>

    )
}

export default Card;