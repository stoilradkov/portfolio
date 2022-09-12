import { ReactNode } from 'react'

export const withError = (
  element: ReactNode,
  error: null | ReactNode,
  className?: string,
) => {
  return (
    <div aria-roledescription="Error Container" className={className}>
      {element}
      {error}
    </div>
  )
}
