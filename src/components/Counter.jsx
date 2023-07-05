import React, { useState } from 'react'

export const Counter = (props) => {
  console.log(props,"props",props.number)

const[count,setCount]=useState(0)

const minus=()=>{
  setCount((prev)=>{return prev - props.number})

}


const plus=()=>{
  setCount((prev)=>{return prev + props.number})
}

// const num=[1,2,3,4,5,6]
// const [a,b,c,d,...next]=num
// console.log(a,b,c,d,next)


// const aagadiNum=num.splice[2,7]
// const pachadiNum=num.splice(2,3)
//  console.log(aagadiNum)




  return (
    <>
    <div>

<button onClick={minus}>-</button>

<p>{count}</p>

<button onClick={plus}>+</button>

    </div>
    
    </>
  )
  }
