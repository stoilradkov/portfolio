import clsx from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ContactLink from './ContactLink'
import { Route } from './routes'
export interface Props {
  routes: Route[]
}

const MenuItems: React.FC<Props> = ({ routes }) => {
  const { pathname } = useRouter()

  return (
    <ul className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10 py-10 lg:py-0">
      {routes.map((route) => (
        <li className="text-lg" key={route.title}>
          {route.to === '/contact' ? (
            <ContactLink route={route} />
          ) : (
            <Link href={route.to}>
              <a
                className={clsx(
                  'transition ease-in-out hover:text-primary-main duration-500',
                  {
                    'text-primary-main': pathname === route.to,
                    'text-text-main': pathname !== route.to,
                  },
                )}
              >
                {route.title}
              </a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default MenuItems
