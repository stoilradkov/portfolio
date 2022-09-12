import type { NextPage } from 'next'
import Head from 'next/head'
import clsx from 'classnames'
import Hero from '../components/home/Hero'
import Introduction from '../components/home/Introduction'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stoil Radkov - Full stack Software Engineer</title>
      </Head>
      <section
        className={clsx(
          'grid grid-cols-1 gap-10 mb-8 overflow-hidden',
          'lg:grid-cols-[2fr_3fr] lg:overflow-visible',
        )}
      >
        <Introduction />
        <article className="flex justify-center items-center place-self-center w-[666px] h-[375px]">
          <Hero />
        </article>
      </section>
    </>
  )
}

export default Home
