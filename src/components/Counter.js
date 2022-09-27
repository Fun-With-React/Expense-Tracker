import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0)
    const [show,setShow] = useState(true)
    const increment = () => {
             setCounter(counter+1)
             setShow(!show)
    }
    const decrement = () => {
        setCounter(counter-1)
        setShow(!show)
    }
  return (
    <div>Counter :  {counter}
        <button onClick={()=> increment()}>Add</button>
        
        <button onClick={()=> counter>0? decrement():0}>Less</button>
        {show && <h5>I am visible</h5>}
    </div>
  )
}

export default Counter