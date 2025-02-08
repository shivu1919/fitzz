import React, { use, useState } from 'react'
import style from '../styles/Home.module.css'
import Button from '@mui/material/Button';

const Home = () => {

  const[weight, setWeight] = useState(50)
  const[feet,setFeet] = useState(5)
  const[inch, setInch] = useState(5)
  const[bmi, setBmi] = useState(0)
  const[bmiresult, setBmiResult] = useState()


  const calcBMI=()=>{
      let f = parseInt(feet)
      let inches = parseInt(inch)
      let height = (f*12 + inches) * 0.0254
      let w = parseInt(weight)
      let result = w / (height*height)
      setBmi(result)
  }



  return (
   <>
      <div className={style.container}>


          <div className={style.bmi}>

                <h1>BMI Calculator</h1>

               <div className={style.bmi_first}>
                  <h2>Height   {feet} ft</h2>
                  <input 
                  id={style.inp} 
                  min='2'
                  max='7'
                  type="range" 
                  value={feet}
                  onChange={(e)=>setFeet(e.target.value)}
                  />

 

                  <h2>Height  {inch} in</h2>

                  <input 
                  id={style.inp}
                  min='0'
                  max='11' 
                  type="range" 
                  value={inch}
                  onChange={(e)=>setInch(e.target.value)}
                  
                  />
                  <h2>Weight    {weight} kg</h2>
                  <input 
                  value={weight}  
                  id={style.inp} 
                  type='range' 
                  min='0' 
                  max='120'
                  step='0.1'
                  onChange={(e)=>setWeight(e.target.value)}
                  
                  />

                <Button onClick={calcBMI} variant="contained">Calculate BMI</Button>;
                  
               </div>

                <h1>BMI: {bmi}</h1>
                <p>{bmiresult}</p>

          </div>

          <div className={style.second}>

          </div>
      </div>
   </>
  )
}

export default Home