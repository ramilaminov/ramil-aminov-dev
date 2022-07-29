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
        <h1 className={styles.title}>
          👨‍💻<br/>
          Ramil Aminov
        </h1>

        <p className={styles.description}>
          CTO &amp;&nbsp;Software&nbsp;Engineer
        </p>

        <div className={styles.grid}>
          <a href='https://github.com/ramilaminov' target='_blank' rel='noopener noreferrer' className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>
              <code className={styles.code}>github.com/ramilaminov</code>
            </p>
          </a>

          <a href='https://habr.com/ru/users/ard/' target='_blank' rel='noopener noreferrer' className={styles.card}>
            <h2>Habr &rarr;</h2>
            <p>
              <code className={styles.code}>habr.com/ru/users/ard/</code>
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
