import clsx from 'classnames'

export interface Props {
  text: string
  hasSpace?: boolean
}

const Badge: React.FC<Props> = ({ text, hasSpace }) => {
  return (
    <span
      className={clsx(
        'text-xs inline-block pb-1.5 pt-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-primary-main text-white rounded-full',
        {
          'mr-1': hasSpace,
        },
      )}
    >
      {text}
    </span>
  )
}

Badge.displayName = 'Badge'

export default Badge
