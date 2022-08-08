import { Link } from 'react-router-dom'

export interface Props {
  brandName: string
}

const Brand: React.FC<Props> = ({ brandName }) => {
  return (
    <h1 className="text-3xl font-bold">
      <Link to="/">{brandName}</Link>
    </h1>
  )
}

export default Brand
