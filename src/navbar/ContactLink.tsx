import clsx from 'classnames'
import { Link } from 'react-router-dom'
import { Route } from './routes'

export interface Props {
  route: Route
}

const ContactLink: React.FC<Props> = ({ route }) => (
  <Link
    to={route.to}
    className={clsx(
      'border border-text-secondary',
      'px-3 py-2',
      'text-text-dark',
      'rounded-md',
      'hover:bg-primary-main hover:text-white hover:border-primary-main',
      'transition ease-in-out duration-150',
    )}
  >
    {route.title}
  </Link>
)

export default ContactLink
