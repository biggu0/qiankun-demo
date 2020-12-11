import React, { useState } from 'react'

export default function Tester () {
  const [count, setCount] = useState(0)

  return (
    <div onClick={() => setCount(count + 1)}>
      I am a tester {count}
    </div>
  )
}
