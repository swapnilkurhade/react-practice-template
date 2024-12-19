import React from 'react'
import { withRouter } from 'react-router-dom';

const WithRouter = ({location, history}) => {
    console.log(location);
    
  return (
    <div>
      <p></p>
    </div>
  )
}

export default withRouter(WithRouter)
