import React, { useState } from 'react'
import style from '../styles/Signup.module.css'
import {NavLink, useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'


function Signup() {

  const navigate = useNavigate()

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const onSignup =()=>{
   
    if(email.length<16 || password.length<8){
      alert('Please make sure that you are entering a genuine email and your password consists of 8 digits')
      setEmail('')
      setPassword('')
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
        alert("Account has been created")
        navigate("/login")
      })
      .catch((error)=>{
        alert('Invalid input or Account already exists')
        setEmail('')
        setPassword('')
      })
      
    }
  
    }
   

  return (
    <>
        <div className={style.container}>
            <form method='post'>
              <h2>Signup</h2>
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
              <Button onClick={onSignup} variant="contained">Signup</Button>
              <br/>
              <br/>   
              <NavLink to="/login">Already have an account?</NavLink>

  
             
            </form>
          
        </div>
    </>
  )
}

export default Signup