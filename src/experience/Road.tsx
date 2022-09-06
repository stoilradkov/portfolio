import clsx from 'classnames'

export interface Props {
  isFirst: boolean
  isLast: boolean
}

const Road: React.FC<Props> = ({ isFirst, isLast }) => {
  return (
    <>
      <div
        aria-roledescription="Checkpoint mark"
        className="w-8 h-8 bg-primary-main absolute left-[calc(50%-12px)] top-[calc(50%-22px)] rounded-full z-10"
      />
      <div
        aria-roledescription="Timeline column"
        className={clsx('bg-black absolute w-2 h-full left-1/2', {
          'rounded-t-xl': isFirst,
          'rounded-b-xl': isLast,
        })}
      />
    </>
  )
}

export default Road
