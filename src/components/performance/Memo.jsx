import React, { useState } from 'react'

// const ChildComponent = ({count}) => {
//     console.log('Child component rendrered');
//     return (
//         <div>Count from parent : {count}</div>
//     )
// }

// Memoised child componenent

const ChildComponent = React.memo(({count})=>{
    console.log('Child component rendrered');
    return (<div>Count from parent : {count}</div>)
})

const Memo = () => {

    const [count, setCount] = useState(0)
    const [nameText, setNameText] = useState('')

    const handleChange = (e) => {
        setNameText(e.target.value)
    }

    return (
        <div>
            <input name='name' placeholder='Enter...' onChange={handleChange}></input>
            <p>Name is : <b>{nameText}</b> </p>
            =========
            <p>{count}</p>
            <button onClick={(e) => { setCount(count + 1) }}>Click</button>
            <ChildComponent count={count}/>

        </div>
    )
}

export default Memo
