import Head from 'next/head'
import clsx from 'classnames'

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Stoil Radkov</title>
      </Head>
      <div className="h-1 w-1/2 rounded-lg m-auto animate-pulse bg-primary-main" />
      <section
        className={clsx(
          'px-10 mt-10 mb-10 grid grid-cols-1',
          'lg:grid-cols-2 lg:gap-x-56',
        )}
      >
        <article>
          <h2 className={clsx('text-5xl text-center', 'lg:text-start')}>
            Who am I
          </h2>
          <p className="mt-5 text-text-secondary text-xl">
            I am a software engineer based in Bulgaria where I am currently
            working as a full stack cloud application developer. I have more
            than three years of experience as a software developer with focus on
            full stack development. In my spare time you can find me working
            out, playing basketball, listening to podcasts or watching sports.
          </p>
        </article>
        <article className={clsx('mt-10', 'lg:mt-0')}>
          <h2 className={clsx('text-5xl text-center', 'lg:text-start')}>
            My strongest skills
          </h2>
          <ul className="mt-5 list-disc text-xl list-inside">
            <li>Javascript, Typescript & Node.js</li>
            <li>
              React & Frontend related tech stack - state management, styling,
              etc.
            </li>
            <li>Relational databases</li>
            <li>AWS</li>
            <li>
              Communication patterns & APIs - REST, GraphQL, Event based
              communication, etc.
            </li>
            <li>Docker & Terraform</li>
            <li>Experience working with teams of different sizes</li>
          </ul>
        </article>
      </section>
    </>
  )
}

export default About
