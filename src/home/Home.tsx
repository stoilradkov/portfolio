import React, { Suspense } from 'react'
import Spinner from '../common/components/Spinner'
import Introduction from './Introduction'

const Hero = React.lazy(() => import('./Hero'))

const Home: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 mb-8 overflow-hidden lg:overflow-visible">
      <Introduction />
      <article className="place-self-center flex justify-center items-center w-[666px] h-[375px] lg:w-auto lg:h-auto">
        <Suspense fallback={<Spinner />}>
          <Hero />
        </Suspense>
      </article>
    </section>
  )
}

export default Home
