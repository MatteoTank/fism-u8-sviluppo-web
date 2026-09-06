import { useState } from 'react'
import Button from './Button'

function Calculator () {
    const num1 = 10
    const num2 = 5

    const [result, setResult] = useState(0)

    return (
        <div>
            <h2>
                Dati i due numeri {num1} e {num2}
                <Button label='+' onClick={() => setResult(num1 + num2)} style={{ marginLeft: '2em', padding: '.3em'}} />
                <Button label='-' onClick={() => setResult(num1 - num2)} style={{ marginLeft: '2em', padding: '.3em'}} />
                <Button label='*' onClick={() => setResult(num1 * num2)} style={{ marginLeft: '2em', padding: '.3em'}} />
                <Button label='/' onClick={() => setResult(num1 / num2)} style={{ marginLeft: '2em', padding: '.3em'}} />
            </h2>
            <h2>Il risultato &egrave;: {result == 0 ? '...' : result}</h2>
        </div>
    )
}

export default Calculator