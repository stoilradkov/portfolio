export interface Props {
  title: string
  summary: string
  description?: string
}
const EducationCard: React.FC<Props> = ({ description, summary, title }) => {
  return (
    <div
      aria-roledescription="Content wrapper"
      className="rounded-xl shadow-md shadow-slate-400 p-5 hover:scale-105 transition duration-300 delay-50"
    >
      <p className="text-2xl mb-1 text-primary-main">{title}</p>
      <p className="text-lg">{summary}</p>
      {description && <p className="text-text-secondary">{description}</p>}
    </div>
  )
}

export default EducationCard
