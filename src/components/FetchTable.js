import axios from 'axios'
import React,{useState} from 'react'

const FetchTable = () => {
const [value,setValue] = useState([])
const [loading,setLoading] = useState(false)
const fetchData =() =>{
   let url = "https://jsonplaceholder.typicode.com/todos"
   axios.get(url).then(res=>{
    //console.table(res.data);
    // return <h3>Loading...</h3>
    setLoading(true)
    setTimeout(() => {
      
      setValue(res.data)
    }, 1000);
    setLoading(false)
    
   
   })
  }
  return (
    <>
    
    <button onClick={fetchData}>Fetch data</button>
    {/* {loading && <h3>Loading...</h3>} */}
    <ul>
    {value? value.map((todo,index)=> (
       <li key={index}>{todo.title}</li> 
    )): <h3>Loading...</h3>} </ul>
    </>
  )
}

export default FetchTable