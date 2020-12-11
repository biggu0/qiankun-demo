import React from 'react'

const RemoteComp = React.lazy(() => import('epp-component/tester'))

export default function App () {
  return (
    <div>
      <React.Suspense fallback="loading">
        <RemoteComp/>
      </React.Suspense>
    </div>
  )
}
