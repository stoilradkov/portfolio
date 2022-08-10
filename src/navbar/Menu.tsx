import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import MenuItems from './MenuItems'
import ROUTES from './routes'

const Menu: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const toggleMenu = () => setIsMenuOpened((opened) => !opened)

  return (
    <>
      <button
        aria-label="Navigation menu"
        aria-expanded={isMenuOpened ? 'true' : 'false'}
        className="lg:hidden"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon size="2x" icon={faBars} />
      </button>
      <nav
        className={`flex lg:flex flex-col basis-full lg:basis-auto flex-grow lg:flex-grow-0 ${
          isMenuOpened ? '' : 'hidden'
        }`}
      >
        <MenuItems routes={ROUTES} />
      </nav>
    </>
  )
}

export default Menu
