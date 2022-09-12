import Image from 'next/image'
import me from '../../public/me_bg.png'
import { imageLoader } from '../../utils/loader/loader'

const Hero: React.FC = () => {
  return (
    <Image
      loader={imageLoader}
      src={me}
      width={666}
      height={375}
      layout="intrinsic"
      //   className="lg:w-[666px] lg:h-[375px] object-contain lg:object-none"
      alt="Stoil Radkov"
    />
  )
}

export default Hero
