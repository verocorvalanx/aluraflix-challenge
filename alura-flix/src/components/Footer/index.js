import styles from "./footer.module.css"
import logo from "./logonav.png"


function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="logo-alura" />
        </footer>
    )
}

export default Footer