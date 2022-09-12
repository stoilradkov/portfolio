import { Education } from './Education.type'
import EducationCard from './EducationCard'

export interface Props {
  title: string
  items: Education[]
}

const EducationSection: React.FC<Props> = ({ title, items }) => {
  return (
    <article className="flex flex-col space-y-6 shadow-lg shadow-primary-secondary rounded-lg p-10 w-full md:w-3/4 lg:w-1/2">
      <h2 className="text-4xl">{title}</h2>
      {items.map((item) => (
        <EducationCard key={item.title} {...item} />
      ))}
    </article>
  )
}

export default EducationSection
