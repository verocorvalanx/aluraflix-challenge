import styles from "./videodestacado.module.css"

function VideoDestacado() {
    return (
        <div className={styles.contenedor}>
            <div className={styles.descripcion}>
                <h1 className={styles.title}>FRONT END</h1>

                <h1 className={styles.secondtitle}>Challenge React</h1>

                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>

            <div className={styles.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ov7vA5HFe6w?si=sSFn0us3_q1tFvIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default VideoDestacado