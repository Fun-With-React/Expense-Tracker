import React,{useState} from 'react'
import { login } from '../utils'


const LoginForm = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState('')
const submitHandler=async(e) =>{
  e.preventDefault()
  try {
    await login({email,password})
    alert('Login success')
  } catch (error) {
    setErr(error.message)
  }
 
  
}

  return (
   <>
   <input type="email" onChange={(e=>setEmail(e.target.value))} value={email} name='email' />
   <input type="password" onChange={(e=>setPassword(e.target.value))} value={password} name="password"/>
   <button onClick={submitHandler}>Login</button>
   <h3>{err}</h3>
   </>
  )
}

export default LoginForm