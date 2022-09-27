import React,{useState} from 'react'

import { login } from '../utils'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [error,seterror] = useState('')
   
  const handleSubmit = async(e)=> {
  e.preventDefault()
  seterror(null)
  setLoading(true)
  try {
    await login({email,password})
        alert('Login Success')
    setLoading(false)
  } catch (error) {
    seterror(error.message)
    setLoading(false)
  }
  
  }
  return (
    <div>
<label htmlFor="email">
    <input onChange={(e)=> setEmail(e.target.value)} type="text" name="email" value={email} />
</label>
<label htmlFor="password">
    <input  onChange={(e)=> setPassword(e.target.value)}type="password" name="email" value={password} />
</label>
<button disabled={!email && !password?true:false} onClick={handleSubmit}>Sign In</button>
    <div>{error}</div>
    {loading? <div>Loading...</div>: ""}




    </div>
  )
}

export default Login