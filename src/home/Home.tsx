import Introduction from './Introduction'
import logo from '../assets/transparent-logo.png'

const Home: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <Introduction />
      <article className="bg-red-500">
        <img src={logo} className="w-96 h-96" alt="logo" />
      </article>
    </section>
  )
}

export default Home
