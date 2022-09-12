import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="px-4 md:px-10 mb-16">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
