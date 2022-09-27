import React from 'react'
import { useState } from 'react'

const AutoComplete = () => {
    let [sugg,setSugg] = useState([])
    let array = ['Addy','Amy','Bazzy','Charlie','Cathy','David','Dylan']
    let arr =[]
    
    const autocomplete = (event) => {
     array.forEach(x=> {
     if(x.substring(0,event.target.value.length).toUpperCase() === event.target.value.toUpperCase()){
        // setSugg(x.forEach(item=> <h3>item</h3>))
        arr.push(x)
        setSugg(arr.map(y=> <ul> <li>{y} </li></ul>))
        console.log(x);
         } 
     })
    }
  return (
    <div>
        <input type="text" onChange={(e)=> autocomplete(e)} />
      <h4>{sugg}</h4>
      {/* {sugg?<ul> <li>{sugg}</li> </ul>:"Nothing to display"} */}
     
    </div>
  )
}

export default AutoComplete