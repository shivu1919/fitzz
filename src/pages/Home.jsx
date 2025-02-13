import React, {useState } from 'react'
import sty from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const[weight, setWeight] = useState(50)
  const[feet,setFeet] = useState(5)
  const[inch, setInch] = useState(5)
  const[bmi, setBmi] = useState('17.791587465635907')
  const[bmiresult, setBmiResult] = useState('underweight')
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
      <div className={sty.box}>


          <div className={sty.bmi}>

                <h1 className={sty.text}>BMI Calculator</h1>

               <div className={sty.bmi_first}>
                  <h2 className={sty.text}>Height   {feet} ft</h2>
                  <input 
                  id={sty.inp} 
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

 

                  <h2 className={sty.text}>Height  {inch} in</h2>

                  <input 
                  id={sty.inp}
                  min='0'
                  max='11' 
                  type="range" 
                  value={inch}
                  onChange={(e)=>{
                    setInch(e.target.value)
                    calcBMI()
                  }}
                  
                  />
                  <h2 className={sty.text}>Weight    {weight} kg</h2>
                  <input 
                  value={weight}  
                  id={sty.inp} 
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

                <h1 className={sty.text}>BMI: {bmi}</h1>
                <p className={sty.text}>{bmiresult}</p>

          </div>

          <div className={sty.second}>
                <h1 className={sty.text}>Continue to Application</h1>
                <Button onClick={goToNext} variant="contained">Continue</Button>
          </div>
      </div>
   </>
  )
}

export default Home