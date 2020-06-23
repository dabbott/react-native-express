import ReactGA from 'react-ga'

const isDev = process.env.NODE_ENV === 'development'

if (typeof window !== 'undefined' && !isDev) {
  ReactGA.initialize('UA-77053427-1')
}

export const pageView = () => {
  if (isDev) return

  const page = window.location.pathname

  ReactGA.set({ page })
  ReactGA.pageview(page)
}
