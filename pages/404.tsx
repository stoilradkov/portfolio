import Head from 'next/head'
import Back from '../components/notFound/Back'

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <section className="w-full flex flex-col items-center">
        <h1 className="text-8xl text-primary-main">404</h1>
        <p className="text-3xl text-text-main mb-10">Page not found</p>
        <p className="mb-8">
          Sorry, you either mistyped the url or I have deleted this page, but
          let&apos;s agree to blame this on you 🙃
        </p>
        <Back to="/" title="Back to home" />
      </section>
    </>
  )
}

export default NotFound
