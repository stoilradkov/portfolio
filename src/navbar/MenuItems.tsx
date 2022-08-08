import { Link } from 'react-router-dom'
import { Route } from './routes'
export interface Props {
  routes: Route[]
}

const MenuItems: React.FC<Props> = ({ routes }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-y-5 md:gap-10 py-10 md:py-0">
      {routes.map((route) => (
        <li className="text-lg" key={route.title}>
          <Link to={route.to}>{route.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuItems
