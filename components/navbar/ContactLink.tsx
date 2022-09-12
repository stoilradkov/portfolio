import clsx from 'classnames'
import Link from 'next/link'
import { Route } from './routes'

export interface Props {
  route: Route
}

const ContactLink: React.FC<Props> = ({ route }) => (
  <Link href={route.to}>
    <a
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
    </a>
  </Link>
)

export default ContactLink
