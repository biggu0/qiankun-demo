import React, { useState, useEffect } from 'react'
import './index.css'

export default function App () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    import('./async-module').then(res => {
      console.log(res.default())
    })
  }, [])

  return (
    <div>
      react app
      <div>
        counr: {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  )
}
