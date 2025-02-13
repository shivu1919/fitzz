import React, { useEffect, useState } from 'react'
import style from '../styles/Fitzz.module.css';

function Fitzz() {

  const[exercises, setExercises] = useState([])

  const fetchData = async() =>{
    try{
        const response = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0',{
          method:'GET',
          headers:{
            'x-rapidapi-key':'60864f912bmshe9deecdd6202d52p1b1e7bjsn6a5d9f1f04fb',
            'x-rapidapi-host':'exercisedb.p.rapidapi.com'
          }
        })

        const data = await response.json()
        setExercises(data)
        console.log(data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[]);

  return (
    <>
      <div className={style.container}>
          <marquee>
            Fitzz || Get in Shape
          </marquee>

        <div className={style.header}>
          <h1>Get in shape, because a sound mind lives in sound body</h1>
          <img className={style.image} src="/assets/fitness.jpg" width="600" alt="Gym Equipment"/>
        </div>

        <h2>Workout</h2>

        <div className={style.grid}>
            {exercises.length>0? (
              exercises.map((item, index)=>(
                <div key={index} className={style.card}>
                    <img src={item.gifUrl} alt="Exercise" />
                    <h3>{item.name}</h3>
                    <p>Target: {item.target}</p>
                    <p>Equipment: {item.equipment}</p>
                </div>
              ))
            ):(
              <p>Loading the data</p>
            )}
        </div>

      </div>
    </>
  )
}

export default Fitzz