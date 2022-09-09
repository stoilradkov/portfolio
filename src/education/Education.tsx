import education from './education.json'
import EducationSection from './EducationSection'

const Education: React.FC = () => {
  return (
    <section className="flex flex-col space-y-10 mb-6 md:items-center md:space-y-20 lg:flex-row lg:items-start lg:justify-between lg:space-x-20 lg:space-y-0">
      <EducationSection title="Education" items={education.education} />
      <EducationSection title="Certificates" items={education.certificates} />
    </section>
  )
}

export default Education
