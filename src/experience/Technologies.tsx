import Badge from '../common/components/Badge'

export interface Props {
  technologies: string[]
}

const Technologies: React.FC<Props> = ({ technologies }) => {
  return (
    <>
      {technologies.map((tech) => (
        <Badge key={tech} text={tech} hasSpace />
      ))}
    </>
  )
}

export default Technologies
