import React, { useState } from 'react'
import SampleOne from './SampleOne'

const ClassComp = () => {
    const [isShown, setIsShown] = useState(true)
  return (
    <div>
      <h6>Class components : all methods </h6>
      <button onClick={()=>{setIsShown(!isShown)}}>Hide or Show</button>
      <hr></hr>
      { isShown && <SampleOne/> }
    </div>
  )
}

export default ClassComp
