import clsx from 'classnames'

type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export type Props = Required<
  Pick<TextareaProps, 'name' | 'value' | 'onChange'>
> &
  TextareaProps

const Textarea: React.FC<Props> = (props) => {
  const { name, value, onChange, className, placeholder, ...rest } = props
  return (
    <textarea
      className={clsx(
        'block outline outline-1 outline-gray-200 bg-gray-50 p-3 rounded-md',
        className,
      )}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  )
}

export default Textarea
