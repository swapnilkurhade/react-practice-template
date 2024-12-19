import React, { useState } from 'react'

const Switch = ({render})=>{
    const [on, setOn] = useState(true)

    const toggle = () =>{
        setOn(!on)
    }

    return render({on,toggle})
}

const Toggle = () => {
  return (
    <div>
      <Switch
      render={({on,toggle})=>{
        return <button onClick={toggle}>{on ? 'ON': 'OFF'}</button>
      }}
      
      
      />
    </div>
  )
}

export default Toggle
