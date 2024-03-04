import styles from '../styles/home.module.scss'
import Head from 'next/head';
export default function Home() {
  return (
    <>

      <Head>
        <title>Apaixonado por técnologia, sujeito programador</title>
      </Head>

      <main className={styles.Container}>
        <div className={styles.ContainerHeader}>

          <section className={styles.ctaText}>
            <h1>Levando voce ao proximo nivel</h1>
            <span>Uma plataforma com cursos, do zero ao profissional na pratica, direto ao ponto</span>
            <a href="">
              <button>Começar Agora</button>
            </a>

          </section>


          <img src="/images/banner-conteudos.png" alt="Conteudos" className={styles.img} />

        </div>


        <div className={styles.SecondLand}>

          <section className={styles.SecondLandContainer}>


            <section className={styles.ctaText}>

              <h1 >
                Aprenda criar aplicativos para Android e iOS
              </h1>

              <span>Você vai descobrir o jeito mais modenro de desenvolver apps nativos para IOS e Andorid, construindo aplicativos do zero até aplicativos avançados</span>

            </section>

            <img src="/images/financasApp.png" className={styles.img} alt="" />

          </section>


        </div>


        <div className={styles.ThirdLand}>

          <section className={styles.FirtComp}>

            <img src="/images/webDev.png" alt="" className={styles.img} />

            <article className={styles.FirstCompTexts}>

              <h1>Aprendar criar sistemas Web</h1>

              <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
            </article>


          </section>


          <section className={styles.SecondComp}>

            <img src="/images/techs.svg" alt="" className={styles.imgSecond} />
            <h1>Mais de 15 mil já levaram sua carreira ao próximo nivel.</h1>
            <p>E você vai perder a chance de evoluir de uma vez por todas?</p>

            <button>Acessar turma</button>

          </section>




        </div>

      </main>
    </>
  );
}
