import React from 'react'
import { renderRoutes } from 'react-router-config'

const routeTo = (url) => {
  window.history.pushState({}, '', url)
}

export default function Index ({ route }) {
  return (
    <div>
      <div>
        <button onClick={() => routeTo('/')}>main</button>
        <button onClick={() => routeTo('/child')}>child</button>
        <button onClick={() => routeTo('/react-micro-app')}>react-micro-app</button>
        <button onClick={() => routeTo('/vue-micro-app')}>vue-micro-app</button>
      </div>
      <div>
        {renderRoutes(route.routes)}
      </div>
    </div>
  )
}
