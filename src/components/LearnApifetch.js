import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const LearnApifetch = () => {
    const [value,setValue] = useState('')
const fetchData = async ()=>{
  return await axios.get('https://jsonplaceholder.typicode.com/todos/5').then(res=> {
    setValue(res.data.title)
    console.log(res.data);
    
})

}

  return (
    <div>
        <button onClick={fetchData}>Push me</button>
        {value}
    </div>
  )
}

export default LearnApifetch