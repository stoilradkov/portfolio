import { Link } from 'react-router-dom'
import logo from '../assets/transparent-logo.png'

export interface Props {
  brandName: string
}

const Brand: React.FC<Props> = ({ brandName }) => {
  return (
    <>
      <h1 className="md:text-3xl text-2xl">
        <Link to="/">
          <img
            className="inline-block w-12 h-12 md:w-16 md:h-16"
            src={logo}
            alt="logo"
          />
          {brandName}
        </Link>
      </h1>
    </>
  )
}

export default Brand
