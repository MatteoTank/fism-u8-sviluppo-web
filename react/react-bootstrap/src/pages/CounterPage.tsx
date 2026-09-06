import { useState } from 'react'

function CounterPage() {
  
  const initialCount = 100
  const [count, setCount] = useState(initialCount)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 2)

  return (
    <div className="m-3">
      <h2>Counter Page</h2>
      <p>{ count }</p>
      <button 
        type="button" 
        className="btn btn-primary"
        onClick={ increment }
      >
        Incrementa
      </button>
      <button 
        type="button" 
        className="btn btn-secondary ms-2"
        onClick={ decrement }
      >
        Decrement 2
      </button>
    </div>
  )
}

export default CounterPage