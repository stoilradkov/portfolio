import clsx from 'classnames'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type Props = Required<Pick<InputProps, 'type' | 'name' | 'onChange'>> &
  InputProps

const Input: React.FC<Props> = (props) => {
  const { name, onChange, type, className, placeholder, ...rest } = props
  return (
    <input
      className={clsx(
        'block outline outline-1 outline-gray-200 bg-gray-50 p-3 rounded-md',
        className,
      )}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  )
}

export default Input
