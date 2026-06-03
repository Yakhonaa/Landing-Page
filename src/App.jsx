import { lazy, Suspense } from 'react'
import { ContentProvider, useContent } from './content/ContentContext'
import { useMediaQuery } from './hooks/useMediaQuery'

const DesktopLanding = lazy(() => import('./components/DesktopLanding'))
const MobileLanding = lazy(() => import('./components/MobileLanding'))

function AppRoutes() {
  const isDesktop = useMediaQuery('(min-width: 900px)')
  const platform = isDesktop ? 'desk' : 'mobile'

  return (
    <ContentProvider platform={platform}>
      <AppContent isDesktop={isDesktop} />
    </ContentProvider>
  )
}

function AppContent({ isDesktop }) {
  const { ready } = useContent()

  if (!ready) {
    return <main className="min-h-screen" aria-busy="true" />
  }

  return (
    <Suspense fallback={<main className="min-h-screen" aria-busy="true" />}>
      {isDesktop ? <DesktopLanding /> : <MobileLanding />}
    </Suspense>
  )
}

function App() {
  return <AppRoutes />
}

export default App
