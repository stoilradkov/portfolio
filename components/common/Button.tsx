import clsx from 'classnames'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type Props = Required<Pick<ButtonProps, 'type'>> & ButtonProps

const Button: React.FC<Props> = (props) => {
  const { type, onSubmit, children, className, ...rest } = props
  return (
    <button
      className={clsx(
        'px-10 py-2.5 rounded-md bg-primary-main text-white font-bold',
        className,
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
