import React from 'react'
import { useState } from 'react'
import './bottom.css'

function Bottom()  {
  const [count ,setCount] = useState(5)

  function decrementCount(){
    setCount (prevCount =>prevCount -1)

  }  function incrementCount(){
    setCount (nextCount =>nextCount +1)

  }

  return (
   <>
   <div  className='container fluid'>
   <button onClick={decrementCount}> -</button>
   <span > {count} </span >
   <button onClick={incrementCount}> +</button>
   </div>
   </>
  )
}

export default Bottom;
