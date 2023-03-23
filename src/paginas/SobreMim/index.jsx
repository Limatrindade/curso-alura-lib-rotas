import styles from "./SobreMim.module.css";
import Banner from "../../Componentes/Banner";
import PostModelo from "../../Componentes/PostModelo";
import fotominhanapedra from "../../assets/fotominhanapedra.jpeg";
import fotoCapa from "../../assets/sobre_mim_capa.png"

function SobreMim() {
    return (
        <main>
            <Banner />
            <PostModelo
                fotoCapa={fotoCapa}
                titulo="Sobre mim"
            >
                <h3 className={styles.subtitulo}>
                    Olá, eu sou o Matheus! 
                </h3>

                <img
                    className={styles.fotoSobreMim}
                    src={fotominhanapedra}
                    alt="Foto minha da página sobre mim" 
                />
                <p className={styles.paragrafo}>
                Sou um jovem estudante de tecnologia da informação, com grande interesse em programação e desenvolvimento web. Atualmente, estou cursando bacharelado em Ciência da Computação em busca de me especializar como desenvolvedor web Fullstack. 
                </p>
                <br />
                <p className={styles.paragrafo}>
                Tenho um forte desejo de aprender e se aperfeiçoar cada vez mais na área, sempre em busca de novos desafios e oportunidades para desenvolver minhas habilidades técnicas. Com dedicação e perseverança, estou determinado á construir uma carreira sólida e bem-sucedida como profissional de TI.
                </p>
                <br />
                <p className={styles.paragrafo}>
                Nasci no dia 5 de julho de 2000 e desde pequeno sempre gostei de jogos de video game, futebol e esportes em geral. Mas, acima de tudo, sempre fui fascinado pela tecnologia e como ela afeta a vida das pessoas ao nosso redor. Sou uma pessoa que preza pela bondade, humildade e respeito, acredito que essas são qualidades importantes para se ter em qualquer ambiente.
                </p>
                <br /> 
                <p className={styles.paragrafo}>
                Gosto de ficar em casa, mas também adoro sair para passear, ir ao cinema, à praia, correr de kart, jogar futebol, pescar e outras atividades que me divirtam. Mas, sem dúvida, o que mais me faz feliz é viajar com a minha família, conhecer novos lugares, cidades, estados e, se Deus quiser, visitar outros países. 
                </p>
                <br />
                <p className={styles.paragrafo}>
                Atualmente, estou correndo atrás do meu objetivo e não irei parar até chegar lá. Espero poder utilizar minha paixão pela tecnologia para fazer a diferença na vida das pessoas e contribuir para um mundo melhor.
                </p>
            </PostModelo>
        </main>
    )
}

export default SobreMim