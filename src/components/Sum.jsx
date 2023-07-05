import React, { useState } from 'react'
import {Counter} from './Counter'

export const Sum = () => {

const[number1,setNumber1]=useState()
const[number2,setNumber2]=useState()
const[sum,setSum]=useState(0)

const inputChange=(event)=>{
    setNumber1(+event.target.value)
    
    }
    const handleChange=(event)=>{
        setNumber2(+event.target.value)
    }

    function clicked(){
        setSum(number1+number2)
    }
    


  return (
    <>
    <div>
        <input type="number" name="number1" onChange={inputChange}/>
        <button onClick={clicked}>add</button>
        <input type="number" name="number2" onChange={handleChange}/>
        <p>{sum}</p>
        <Counter number={sum} value="abcde"/>
    </div>
    
    </>
  )
}
