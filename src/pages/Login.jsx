import React, { useState } from 'react'
import style from '../styles/Login.module.css'
import {NavLink, useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'


function Login() {

  const navigate = useNavigate()

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const onSignup =()=>{
   
    if(email.length<16 || password.length<8){
      alert('Please make sure that you are entering a genuine email and your password consists of 8 digits')
    }
    else{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/fitzz")
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('User not found')
        setEmail('')
        setPassword('')
      });
    }
  
    }
   

  return (
    <>
        <div className={style.container}>
            <form method='post'>
              <h2>Login</h2>
              <br/>
          
              <label>Email:</label>

              <input 
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              
              />

              <br/>
              <br/>
              <label>Password:</label>

              <input 
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              
              />

              <br/>
              <br/>
              <Button onClick={onSignup} variant="contained">Login</Button>
              <br/>
              <br/>   
              <NavLink to="/signup">Does'nt have an account?</NavLink>

  
             
            </form>
          
        </div>
    </>
  )
}

export default Login