import React,{useState} from 'react'

const Sum = () => {
    const [input1,setInput1] = useState()
    const [input2,setInput2] = useState()
const [value,setValue] = useState(0)

const add = () => {
  setValue(input1+input2)
  console.log(input1+input2);
  
}

  return (
    <>
    <input onChange={(e)=>setInput1(+e.target.value)} type="number" value={input1} placeholder="first number" /> <br/><br/>
    <input onChange={(e)=>setInput2(+e.target.value)} type="number" value = {input2} placeholder="second number" /><br/><br/>
    <button onClick={add}>Add</button>
    <h3>{value}</h3>
    </>
  )
}

export default Sum