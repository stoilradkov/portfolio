import { Project } from './Projects.type'

export interface Props {
  projects: Project[]
}
const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <>
      <p className="text-xl sm:text-2xl">Projects:</p>
      <ul className="mb-4 text-text-main sm:text-lg">
        {projects.map(({ title, description }) => (
          <li key={`${title}-${description}`} className="list-disc list-inside">
            {title} - {description}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Projects
