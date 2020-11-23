import React from 'react';

const RemoteButton = React.lazy(() => import('mainApp/Button'));

export default function App() {
  return (
    <div>
      <React.Suspense fallback="Loading Button">
        <RemoteButton/>
      </React.Suspense>
    </div>
  );
}
