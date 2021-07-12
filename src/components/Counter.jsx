import { useState } from "react"

// Imutabilidade - 

export function Counter() {
  const [counter, setCounter] = useState(0)

  function increment() {
    console.log('Incrementing')
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
    </div>
  )
}