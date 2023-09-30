import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Login() {
let [email,setEmail] = useState('')
let [password,setPassword] = useState('')

let navigate = useNavigate()

async function handleSubmit(e){
    e.preventDefault()

    const loginData = {
        usr: email,
        pwd: password
      };
  try{
    const response = await axios.get(`https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token?usr=${email}&pwd=${password}`,
    
    {
        params: loginData
    },
    
    )

    console.log(response.data)
    navigate('/user')

  
  }catch(err){
    console.log('Login Failed',err)
  }

}


  return (
    <div className='container'>
       <div className='login-wrap'>
            <form  onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                <label htmlFor='email'>Email</label>
                <input name="email" className='emailid' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor='pass'>Password</label>
                <input name='pass' className='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
        </div>
      
    
    
  )
}

export default Login
