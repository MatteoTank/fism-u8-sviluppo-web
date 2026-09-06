import { useState } from "react"

function CounterPage () {

    const [count, setCount] = useState (0)

    const Increment = () => {
        setCount (count + 1)
    }
    const Decrement = () => {
        if (count >= 2){
            setCount (count - 2)
        }
    }

    return (
    <>
        <h2>Counter page</h2>
        <p> {count} </p>
        <button className="btn btn-primary" onClick={Increment}>Incrementa</button>
        <button className="btn btn-secondary" onClick={Decrement}>Decrementa 2</button>
    </>
    )
}

export default CounterPage