import Timeline from '../components/experience/Timeline'
import { Experience as Job } from '../components/experience/Experience.type'
import experiences from '../components/experience/experience.json'

const Experience: React.FC = () => {
  return (
    <section className="mb-6">
      {(experiences as Job[]).map((job, i) => (
        <Timeline
          key={job.time}
          reversed={i % 2 === 0}
          isFirst={i === 0}
          isLast={i === experiences.length - 1}
          job={job}
        />
      ))}
    </section>
  )
}

export default Experience
