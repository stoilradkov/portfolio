export interface Route {
  title: string
}

export interface Props {
  routes: Route[]
}

const MenuItems: React.FC<Props> = ({ routes }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-y-5 md:gap-10 py-10 md:py-0">
      {routes.map((route) => (
        <li className="text-lg" key={route.title}>
          {route.title}
        </li>
      ))}
    </ul>
  )
}

export default MenuItems
