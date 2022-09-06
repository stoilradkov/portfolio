import { Experience } from './Experience.type'
import JobCard from './JobCard'
import Road from './Road'
import Time from './Time'

export interface Props {
  reversed: boolean
  isFirst: boolean
  isLast: boolean
  job: Experience
}

const Timeline: React.FC<Props> = ({ reversed, isFirst, isLast, job }) => {
  const { projects, technologies, time, title } = job

  const jobElement = reversed ? (
    <>
      <JobCard
        reversed={reversed}
        projects={projects}
        technologies={technologies}
        title={title}
      />
      <Time time={time} />
    </>
  ) : (
    <>
      <Time time={time} />
      <JobCard
        reversed={reversed}
        projects={projects}
        technologies={technologies}
        title={title}
      />
    </>
  )
  return (
    <div
      aria-roledescription="Job container"
      className="flex flex-row relative"
    >
      <div
        aria-roledescription="Job card information"
        className="flex flex-row mb-4"
      >
        {jobElement}
      </div>
      <Road isFirst={isFirst} isLast={isLast} />
    </div>
  )
}

export default Timeline
