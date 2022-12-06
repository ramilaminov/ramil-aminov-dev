import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import photo from '../public/photo.png'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-min sm:min-h-screen flex-col items-center justify-center pt-16 pb-9 sm:pt-2 sm:pb-16">
      <Head>
        <title>Ramil Aminov</title>
        <meta name="description" content="Ramil Aminov" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 sm:px-20 text-center">
        <Image
          src={photo}
          alt="Ramil Aminov"
          width={150}
          height={150}
        />

        <h1 className="text-6xl font-bold mt-3">
          Ramil Aminov
        </h1>

        <p className="mt-9 text-2xl">
          Software Engineer, CTO&nbsp;at&nbsp;
          <a
            href="https://smarthead.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline hover:text-blue-600"
          >
            SmartHead
          </a>
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 p-3 mt-6 text-xl">
          <li className="font-mono">
            <a
              className="hover:underline hover:text-blue-600"
              href='https://github.com/ramilaminov/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <b>github</b>.com/ramilaminov
            </a>
          </li>
          <li className="font-mono">
            <a
              className="hover:underline hover:text-blue-600"
              href='https://www.linkedin.com/in/ramilaminov/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <b>linkedin</b>.com/in/ramilaminov
            </a>
          </li>
          <li className="font-mono">
            <a
              className="hover:underline hover:text-blue-600"
              href='https://dev.to/ramilaminov/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <b>dev.to</b>/ramilaminov
            </a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
