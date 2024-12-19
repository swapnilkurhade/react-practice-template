import React, { useState } from 'react'

const HandleTracker = ({render}) =>{

    const [position, setPosition] = useState({
        x:0, y:0
    })

    const handleChange = (e)=>{
        setPosition({ x: e.clientX, y: e.clientY });
    }

    return <div style={{height:'100vh'}} onMouseMove={handleChange}>{render(position)}</div>
}

const MounseTracker = () => {
  return (
    <div>
      <HandleTracker

        render={(({x,y})=>(
            <h1>Position {x} {y}</h1>
        ))}
      
      />
    </div>
  )
}

export default MounseTracker
