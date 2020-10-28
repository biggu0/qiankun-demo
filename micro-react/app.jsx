import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      react app
      <div>
        counr: {count}
        <button onClick={() => setCount(count + 1)}>count + 1</button>
      </div>
    </div>
  )
}