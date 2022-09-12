import '../styles/globals.css'
import clsx from 'classnames'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className={clsx('px-4 mb-16', 'md:px-10')}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
