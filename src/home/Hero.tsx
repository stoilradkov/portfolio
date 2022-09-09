import me from '../assets/me_bg.png'

const Hero: React.FC = () => {
  return (
    <img
      src={me}
      width="666px"
      height="375px"
      className="lg:w-[666px] lg:h-[375px] object-contain lg:object-none"
      alt="Stoil Radkov"
    />
  )
}

export default Hero
