import Card from "components/Card"
import styles from "./categoria.module.css"
import { useEffect, useState } from "react"


function Categoria({ categoria, color }) {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/verocorvalanx/alura-flix-api/videos")
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])


    return (
        <>
            <div className={styles.categoria}
                style={{ backgroundColor: `${color}` }}>
                <span className={styles.name}>{categoria}</span>
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