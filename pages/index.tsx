import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ramil Aminov</title>
        <meta name="description" content="Ramil Aminov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.photo}>
          👨‍💻
        </div>
        <h1 className={styles.title}>
          Ramil Aminov
        </h1>

        <p className={styles.description}>
          Software&nbsp;Engineer &amp;&nbsp;CTO
        </p>

        <div className={styles.grid}>
          <a href='https://github.com/ramilaminov/' target='_blank' rel='noopener noreferrer' className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>
              <code className={styles.code}>/ramilaminov</code>
            </p>
          </a>

          <a href='https://www.linkedin.com/in/ramilaminov/' target='_blank' rel='noopener noreferrer' className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>
              <code className={styles.code}>/in/ramilaminov</code>
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
