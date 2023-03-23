import styles from "./Menu.module.css";
import { Link, useLocation } from "react-router-dom";

function Menu() {
    const localizacao = useLocation()

    //console.log(localizacao)

    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={`
                        ${styles.link}
                        ${localizacao.pathname === "/" ? styles.linkDestacado : ""}
                    `} to="/" >
                    Início
                </Link>
                <Link className={`
                        ${styles.link}
                        ${localizacao.pathname === "/sobremim" ? styles.linkDestacado : ""}
                    `} to="/sobremim" >
                    Sobre Mim
                </Link>
            </nav>
        </header>
    )
}

export default Menu