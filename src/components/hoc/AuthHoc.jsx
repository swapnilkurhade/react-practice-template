import React from 'react'


const withAuthorization = (WrappedComponent, role)=>{
    return ((props)=>{
        if(role !== 'admin'){
            return <div>Access Denied</div>
        }
        const testObj = {name:'samay'}
        return  <WrappedComponent {...testObj}/>
    })
}

const AuthHoc = ({name}) => {
  return (
    <div>
      <h6>Hi Admin, {name}</h6>
    </div>
  )
}

export default withAuthorization(AuthHoc,'admin')
