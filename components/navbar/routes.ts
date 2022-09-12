export interface Route {
  title: string
  to: string
}

const ROUTES: Route[] = [
  {
    title: 'About Me',
    to: '/about',
  },
  {
    title: 'Experience',
    to: '/experience',
  },
  {
    title: 'Education',
    to: '/education',
  },
  {
    title: "Let's chat",
    to: '/contact',
  },
]

export default ROUTES
