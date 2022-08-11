import Introduction from './Introduction'
import me from '../assets/me.png'

const Home: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10">
      <Introduction />
      <article className="place-self-center">
        <img
          src={me}
          className="w-[460px] h-[400px] hover:scale-110 transition duration-1000 delay-100"
          alt="Stoil Radkov"
        />
      </article>
    </section>
  )
}

export default Home
