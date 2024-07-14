import VideoDestacado from "components/VideoDestacado"
import styles from "./banner.module.css"


function Banner() {
    return (
        <div className={styles.container}>
           <VideoDestacado />
        </div>
    )
}

export default Banner