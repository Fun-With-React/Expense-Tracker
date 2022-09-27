import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {Button} from 'react-bootstrap'


const FetchApi = () => {
    const [info,setInfo] = useState('')
    const fetchData = async () => {
        try {
            return await axios.get('https://randomuser.me/api')
            .then((res)=> {
                res.data.results.map(e=> console.log(e.location))
                return JSON.stringify(res.data.results,null,2)
                
            }).then(fetchedData=>{setInfo(fetchedData)})  //done for button click
        } 
        
        catch (err) {
            console.log(err)
        }
    }
    
    const fetchAuthor = async () => {
      try {
          return axios.get('https://randomuser.me/api')
          .then(({data})=> {  //.then((res))
              console.log(data.info.seed);  //instead of res.data.info, destructured and wrote as data.info
              //setInfo(res.data.content)
              console.log(data)
             // setInfo(data.info)
              //return data.status
              
          })
      } catch (err) {
          console.log(err)
      }
  }
    const [userAuthor,setUserAuthor] = useState("")
    // useEffect(()=> {
    //   fetchData().then(fetchedData=>{
    //       setInfo(fetchedData)
    //     // setUserInfo(fetchedData)
    //   })
    // },[])
   
    const getAuthor =() => {
      fetchAuthor().then(fetchedAuthor=>{
               setUserAuthor(fetchedAuthor)
     }
  )}
  return (
    <>
    <div>Fetch Api</div>
    <Button onClick= {fetchData}>Get Author</Button>
    <pre>{info}</pre>
    
      <p>Author: {userAuthor}</p>
  
    </>
  )
}

export default FetchApi