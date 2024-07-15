import styles from "./boton.module.css"

function Boton(props) {
    return (
<button type={props.type} >{props.nombre}</button>
    )
}

export default Boton