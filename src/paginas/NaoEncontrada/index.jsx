import styles from "./NaoEncontrada.module.css"
import imgErro404 from "../../assets/erro_404.png"
import { useNavigate } from "react-router-dom"

function NaoEncontrada() {
    const navegar = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?  
                </p>
                <p className={styles.paragrafo}>
                Aguarde uns instantes e recarregue a página, ou volte para a página de início.
                </p>
                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <button>Voltar</button>
                </div>

                <img
                    className={styles.imagemCachorro} 
                    src={imgErro404} 
                    alt="Imagem de um cachorro indicando o erro 404, ou seja página não encontrada" 
                />
            </div>
            <div className={styles.espacoEmBranco}>
            </div>
        </>
    )
}

export default NaoEncontrada