import Brand from './Brand'
import Menu from './Menu'

const Navbar: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center justify-between py-10 px-12">
      <Brand brandName="Stoil Radkov" />
      <Menu />
    </header>
  )
}

export default Navbar
