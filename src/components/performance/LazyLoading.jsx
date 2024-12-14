import React, { Suspense, useState } from 'react'
// import LazyChild from './LazyChild'
const LazyChild = React.lazy(()=>import('./LazyChild'))


const LazyLoading = () => {

    const [isShow, setIsShow] = useState(false)

    return (
        <div>
            <h4>Lazy Loading....</h4>
            <br />
            <button onClick={() => { setIsShow(!isShow) }}>Click...</button>
            { isShow && 
            <Suspense fallback={<div>Loading...</div>}>
                <LazyChild/>
            </Suspense>
            
            }
            
        </div>
    )
}

export default LazyLoading
