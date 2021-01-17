import { NotFound } from 'react-guidebook'
import legacyRoutes from '../utils/legacyRoutes'

export default function PageNotFound() {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <NotFound routeMap={legacyRoutes} />
    </div>
  )
}

Object.assign(PageNotFound, {
  title: 'Not found',
})
