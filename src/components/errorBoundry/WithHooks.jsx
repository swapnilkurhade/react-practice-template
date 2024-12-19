import React, { useState } from 'react'

const ErrorBoundryComp = ({ children }) =>{
    const [hasError, setHasError] = useState(false);

    try {
      if (hasError) {
        throw new Error('Custom Error Boundary');
      }
      return children;
    } catch (error) {
      return <h1>Something went wrong!</h1>;
    }
}

const BuggyComponent = () =>{
    throw new Error('I crashed!');
}

const WithHooks = () => {
  return (
    <div>
      <ErrorBoundryComp>
        <BuggyComponent/>
      </ErrorBoundryComp>
    </div>
  )
}

export default WithHooks
