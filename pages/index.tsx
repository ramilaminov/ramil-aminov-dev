import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import photo from '../public/photo.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ramil Aminov</title>
        <meta name="description" content="Ramil Aminov" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Image
          src={photo}
          alt="Ramil Aminov"
          width={150}
          height={150}
        />
        
        <h1 className={styles.title}>
          Ramil Aminov
        </h1>

        <p className={styles.description}>
          Software&nbsp;Engineer &amp;&nbsp;CTO
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href='https://github.com/ramilaminov/' target='_blank' rel='noopener noreferrer'>
            <code><b>github</b>.com/ramilaminov</code>
          </a>

          <a className={styles.card} href='https://www.linkedin.com/in/ramilaminov/' target='_blank' rel='noopener noreferrer'>
            <code><b>linkedin</b>.com/in/ramilaminov</code>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
