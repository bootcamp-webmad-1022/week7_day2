import { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    const decrementCounter = () => {
        setCounterValue(counterValue - 1)
    }

    return (
        <article className='Counter'>

            <h2>Has hecho click {counterValue} veces</h2>

            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>

        </article>
    )
}

export default Counter