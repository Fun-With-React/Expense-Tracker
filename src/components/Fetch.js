import axios from 'axios'
import React,{useEffect, useState} from 'react'

const Fetch = () => {
    const [data,setData] = useState('')
    // const fetchData = async() => {
    //  return await axios.get('https://randomuser.me/api')
    //  .then(res=> {
    //     return JSON.stringify(res.data.results.map(e=> e.location),null,2)
    //  })
    // }
    const fetchData=async() => {
        return await axios.get('https://jsonplaceholder.typicode.com/todos/5')
        .then(res=> {
            return res.data.title
        })
    }
    useEffect(()=> {
fetchData().then(fetchedData=> {
  setData(fetchedData)
    
})
    },[])

  return (
 <>
 <pre>{data}</pre>
 
 
 </>
  )
}

export default Fetch