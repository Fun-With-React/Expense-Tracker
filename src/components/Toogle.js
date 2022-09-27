import React from 'react'
import { useState } from 'react'

const Toogle = () => {
const[show,setShow] = useState(true)
const tog = () => {
  setShow(!show)
}

  return (
    <div>
<p>Toggle magic</p>
{show && <h3>Hide me</h3>}
{show ? <button onClick={tog}>I am shown</button> : <button onClick={tog}>I am gone</button>}


    </div>
  )
}

export default Toogle