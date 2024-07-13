import { Link } from "react-router-dom"
import styles from "./headerlink.module.css"



function HeaderLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default HeaderLink