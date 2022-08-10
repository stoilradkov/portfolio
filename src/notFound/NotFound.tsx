import Back from './Back'

const NotFound: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="text-8xl text-primary-main">404</h1>
      <p className="text-3xl text-text-main mb-10">Page not found</p>
      <p className="mb-8">
        Sorry, you either mistyped the url or I've deleted this page, but let's
        agree to blame this on you 🙃
      </p>
      <Back to="/" title="Back to home" />
    </section>
  )
}

export default NotFound
