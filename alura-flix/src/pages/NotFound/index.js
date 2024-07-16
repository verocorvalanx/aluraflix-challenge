import styles from "./notfound.module.css"

function NotFound() {
    return (
        <section className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p className={styles.texto_error}>Página no encontrada</p>
        </section>
    )
}

export default NotFound