import React from 'react'
import { useState } from 'react'

const BasicCounter = () => {
  const [value,setValue] = useState(0)
  const [inputValue,setInputValue] = useState("June")
  const increment = () => {
    setValue(value+1)
  }
  const decrement = () => {
    setValue(value-1)
  }
  return (
    <div>
<h2>Counter app</h2>
<h3>{value}</h3>
<button onClick= {increment}>+</button>
<button onClick= {decrement}>-</button>
<div><input type="text" placeholder="Enter something" onChange={(e)=>setInputValue(e.target.value)}/>

</div>
{inputValue}


    </div>
  )
}

export default BasicCounter