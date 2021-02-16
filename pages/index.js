import styles from '../styles/Home.module.css';

function index(){
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Oláa <a>teste de css</a></h1>
                <p className={styles.description}>Meu primeiro app em Next.JS</p>
                <p>Digite: <span className={styles.code}>yarn dev</span> para iniciar este projeto</p>
            </main>
        </div>
    )
}

export default index;