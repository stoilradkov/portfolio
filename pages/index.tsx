import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/Hero'
import Introduction from '../components/home/Introduction'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stoil Radkov - Full stack Software Engineer</title>
      </Head>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 mb-8 overflow-hidden lg:overflow-visible">
        <Introduction />
        <article className="place-self-center flex justify-center items-center w-[666px] h-[375px] lg:w-auto lg:h-auto">
          <Hero />
        </article>
      </section>
    </>
  )
}

export default Home
