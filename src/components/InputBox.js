import React from 'react'
import { useState,useRef } from 'react'

const InputBox = () => {
    const [name,setName] = useState('Larry')
    const [age,setAge] = useState(20)
    const [value,setValue] = useState('Type to change me')
    const inputRef = useRef()

const change = ()=>{
   setName('Hary')
    setAge(40)
     }    
 const onchange = (e)=>{
    const newValue = e.target.value
    setValue(newValue)
 }    
  return (
    <div>
  <input ref = {inputRef} placeholder = 'Enter name' onChange={onchange}/> {value}<br/>
   <h3>{name} is {age} years old</h3>
    <button type='submit'onClick={()=>change()}>Change</button>
   <button onClick={()=> inputRef.current.focus()}>Focus</button>
    </div>
  )
}

export default InputBox