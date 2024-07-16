import styles from "./modal.module.css"

function Modal() {
    return (
        <dialog open>
            <p>bli</p>
            <form method="dialog">
                <button className={styles.botonModal}>re bli</button>
            </form>
        </dialog>
    )
}
export default Modal