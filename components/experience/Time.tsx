export interface Props {
  time: string
}
const Time: React.FC<Props> = ({ time }) => {
  return (
    <div
      aria-roledescription="Time container"
      className="w-1/2 flex justify-center items-center text-center px-6 lg:px-0"
    >
      <h2 className="text-3xl text-primary-main">{time}</h2>
    </div>
  )
}

export default Time
