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
        className="md:hidden"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon size="2x" icon={faBars} />
      </button>
      {/* TODO check for animation */}
      <nav
        className={`flex md:flex flex-col basis-full md:basis-auto flex-grow md:flex-grow-0 ${
          isMenuOpened ? '' : 'hidden'
        }`}
      >
        <MenuItems routes={ROUTES} />
      </nav>
    </>
  )
}

export default Menu
