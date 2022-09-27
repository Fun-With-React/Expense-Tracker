import React from 'react'
import { useState } from 'react'

const LearnCounter = () => {
const [val,setVal]=useState(0)
const increment = ()=> {
    setVal(val+1)
}
const decrement = ()=> {
    setVal(val-1)
}
  return (
    <div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <h3>{val}</h3>
    </div>
  )
}

export default LearnCounter