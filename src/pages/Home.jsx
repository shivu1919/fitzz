import React, { use, useState } from 'react'
import style from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const[weight, setWeight] = useState(50)
  const[feet,setFeet] = useState(5)
  const[inch, setInch] = useState(5)
  const[bmi, setBmi] = useState()
  const[bmiresult, setBmiResult] = useState()
  const navigate = useNavigate()

  const goToNext=()=>{
      navigate("/signup")
  }

  const calcBMI=()=>{
      let f = parseInt(feet)
      let inches = parseInt(inch)
      let height = (f*12 + inches) * 0.0254
      let w = parseInt(weight)
      let result = w / (height*height)
      setBmi(result)
      
      if(result<18.9){
        setBmiResult("Underweight")
      }
      else if(result>=18.9 && result <=24.9){
        setBmiResult("Normal")
      }
      else{
        setBmiResult("Over Weight")
      }
  }



  return (
   <>
      <div className={style.container}>


          <div className={style.bmi}>

                <h1 className={style.text}>BMI Calculator</h1>

               <div className={style.bmi_first}>
                  <h2 className={style.text}>Height   {feet} ft</h2>
                  <input 
                  id={style.inp} 
                  min='2'
                  max='7'
                  type="range" 
                  value={feet}
                  onChange={(e)=>{
                    setFeet(e.target.value)
                    calcBMI()
                  }
                    
                  }
                  />

 

                  <h2 className={style.text}>Height  {inch} in</h2>

                  <input 
                  id={style.inp}
                  min='0'
                  max='11' 
                  type="range" 
                  value={inch}
                  onChange={(e)=>{
                    setInch(e.target.value)
                    calcBMI()
                  }}
                  
                  />
                  <h2 className={style.text}>Weight    {weight} kg</h2>
                  <input 
                  value={weight}  
                  id={style.inp} 
                  type='range' 
                  min='0' 
                  max='120'
                  step='0.1'
                  onChange={(e)=>{

                    setWeight(e.target.value)
                    calcBMI()
                  }}
                  
                  />


                  
               </div>

                <h1 className={style.text}>BMI: {bmi}</h1>
                <p className={style.text}>{bmiresult}</p>

          </div>

          <div className={style.second}>
                <h1 className={style.text}>Continue to Application</h1>
                <Button onClick={goToNext} variant="contained">Continue</Button>
          </div>
      </div>
   </>
  )
}

export default Home