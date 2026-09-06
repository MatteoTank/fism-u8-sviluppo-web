import { useState } from "react"
import Button from './Button'

function Counter() {
  const initialValue = 5
  const limit = 0
  const [count, setCount] = useState(initialValue)

  return (
    <>
      <p>{count}</p>
      <Button label="Incrementa" onClick={() => setCount(count + 1)} />
      <Button label="Decrementa" onClick={() => count > limit ? setCount(count - 1) : null} style={{marginLeft: '2em'}} />
      {count > 0 && <Button label="Azzera" onClick={() => setCount(limit)} style={{marginLeft: '2em'}} />}
      <Button label="Ripristina" onClick={() => setCount(initialValue)} style={{marginLeft: '2em'}} />
    </>
  )
}

export default Counter