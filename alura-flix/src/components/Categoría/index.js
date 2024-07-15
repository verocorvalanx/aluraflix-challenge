import Card from "components/Card"
import styles from "./categoria.module.css"
import videos from "data/db.json"

function Categoria({ nombre, color }) {
    return (
        <>
            <div className={styles.categoria} style={{ backgroundColor: `${color}` }}>
                <span className={styles.name}>{nombre}</span>
            </div>
            <div className={styles.videos}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} color={`${color}`} />
                })}
            </div>
        </>
    )
}

export default Categoria