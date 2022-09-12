import clsx from 'classnames'
import Projects from './Projects'
import { Project } from './Projects.type'
import Technologies from './Technologies'

export interface Props {
  reversed: boolean
  title: string
  projects: Project[]
  technologies: string[]
}

const JobCard: React.FC<Props> = ({
  reversed,
  title,
  projects,
  technologies,
}) => {
  return (
    <div
      aria-roledescription="Job description"
      className={clsx('w-1/2', {
        'pl-10 lg:pl-14': !reversed,
        'pr-8 lg:pr-12': reversed,
      })}
    >
      <h3 className="text-2xl sm:text-3xl mb-4">{title}</h3>
      <Projects projects={projects} />
      <Technologies technologies={technologies} />
    </div>
  )
}

export default JobCard
