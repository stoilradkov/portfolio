import { StrictMode, type ReactElement } from 'react'
import { createRoot } from 'react-dom/client'

export function renderPage(element: ReactElement) {
  const container = document.getElementById('root')

  if (!container) {
    throw new Error('The root element could not be found.')
  }

  createRoot(container).render(<StrictMode>{element}</StrictMode>)
}
