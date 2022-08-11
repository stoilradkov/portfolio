import clsx from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import ContactLink from './ContactLink'
import { Route } from './routes'
export interface Props {
  routes: Route[]
}

const MenuItems: React.FC<Props> = ({ routes }) => {
  const { pathname } = useLocation()

  return (
    <ul className="flex flex-col lg:flex-row items-center gap-y-5 lg:gap-10 py-10 lg:py-0">
      {routes.map((route) => (
        <li className="text-lg" key={route.title}>
          {route.to === '/contact' ? (
            <ContactLink route={route} />
          ) : (
            <Link
              to={route.to}
              className={clsx(
                'transition ease-in-out hover:text-primary-main duration-500',
                {
                  'text-primary-main': pathname === route.to,
                  'text-text-main': pathname !== route.to,
                },
              )}
            >
              {route.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default MenuItems
