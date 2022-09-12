import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/transparent-logo.png'
import { imageLoader } from '../../utils/loader/loader'

export interface Props {
  brandName: string
}

const Brand: React.FC<Props> = ({ brandName }) => {
  return (
    <>
      <Link href="/">
        <a className="flex items-center">
          <Image
            loader={imageLoader}
            className="inline-block"
            src={logo}
            alt="logo"
            width={64}
            height={64}
            layout="intrinsic"
          />
          <h1 className="md:text-3xl text-2xl">{brandName}</h1>
        </a>
      </Link>
    </>
  )
}

export default Brand
