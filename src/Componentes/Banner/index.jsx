import styles from "./Banner.module.css"
import imgCirculoColorido from "../../assets/circulo_colorido.png"
import imgMinhaFoto from "../../assets/minhafoto.jpeg"

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo
                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Matheus Lima, sou um universitário de ciências da computação e também um apaixonado pela tecnologia. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={imgCirculoColorido} 
                    alt="imagem do circulo colorido no banner" 
                />
                <img 
                    className={styles.minhaFoto}
                    src={imgMinhaFoto} 
                    alt="minha imagem no banner" 
                />
            </div>
        </div>
    )
}

export default Banner