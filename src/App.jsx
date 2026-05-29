import { lazy, Suspense } from 'react'
import { useMediaQuery } from './hooks/useMediaQuery'

const DesktopLanding = lazy(() => import('./components/DesktopLanding'))
const MobileLanding = lazy(() => import('./components/MobileLanding'))

function App() {
  const isDesktop = useMediaQuery('(min-width: 900px)')

  return (
    <Suspense fallback={null}>
      {isDesktop ? <DesktopLanding /> : <MobileLanding />}
    </Suspense>
  )
}

export default App
