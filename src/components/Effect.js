import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Effect = () => {
const [counter,setCounter] = useState(0)
 const [user,setUser] = useState([])
 const [name,setName] = useState('Kumar')
 const fetchData = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos/5')
  .then(response=> {
    setUser(response.data.title)
    console.log(response.data.title)})
  .catch(err=> console.log(err))
   }
  
useEffect(()=> {
  
    console.log('I am in useEffect');
    // console.log(name);
   fetchData()
   },[name])

  return (
    <div>
  {counter}
  <button onClick={()=> setCounter(counter+10)}>Add</button>
  <button onClick={()=> setName('Purnima')}>Change name</button>
  <h3>{name}</h3>
  <h4>{user}</h4>

    </div>
  )
}

export default Effect