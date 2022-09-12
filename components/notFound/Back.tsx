import Link from 'next/link'

export interface Props {
  to: string
  title: string
}

const Back: React.FC<Props> = ({ to, title }) => {
  return (
    <Link href={to}>
      <a
        className="border border-primary-secondary p-2 rounded-md shadow-md shadow-primary-secondary bg-primary-secondary text-white 
      transition ease-in-out duration-150 hover:bg-primary-main hover:shadow-primary-main hover:border-primary-main"
      >
        {title}
      </a>
    </Link>
  )
}

export default Back
