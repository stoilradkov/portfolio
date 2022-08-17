import Introduction from './Introduction'
import me from '../assets/me_bg.png'

const Home: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 mb-8 overflow-hidden lg:overflow-visible">
      <Introduction />
      <article className="place-self-center rounded-2xl w-[666px] h-[375px] lg:w-auto lg:h-auto">
        <img
          src={me}
          className="lg:w-[666px] lg:h-[375px] object-contain lg:object-none hover:scale-110 transition duration-1000 delay-100 rounded-2xl"
          alt="Stoil Radkov"
        />
      </article>
    </section>
  )
}

export default Home
