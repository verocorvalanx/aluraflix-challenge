import { Link } from "react-router-dom"
import styles from "./header.module.css"
import logo from "./logonav.png"
import HeaderLink from "components/HeaderLink"

function Header() {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
            <section className={styles.logoContainer}></section>
           <img src={logo} alt="logo-alura" />
            </Link>
            <nav>
                <HeaderLink url="./">
                Home </HeaderLink>
                <HeaderLink url="./nuevovideo">
                Nuevo video </HeaderLink>
            </nav>
        </header>
    )
}

export default Header