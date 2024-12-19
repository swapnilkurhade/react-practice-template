import React from 'react'

const ChildrenCom = ({children}) =>(
    <div className='container' style={{backgroundColor:'red', padding: '20px'}}>
        {children}
    </div>
)


const ChildrenProps = () => {
  return (
    <div>
      <ChildrenCom>
        <p>This is React</p>
        <p>Learning chilren props </p>
      </ChildrenCom>
    </div>
  )
}

export default ChildrenProps
