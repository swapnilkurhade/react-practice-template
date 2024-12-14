import React, { useEffect, useState } from 'react'

const useDebounce = (value) =>{
    const [debouncedTerm, setDebounceTerm] = useState(value);

    useEffect(()=>{
     
        
        const thisTimeout = setTimeout(() => {
            setDebounceTerm(value)
        }, 500);

        // const thisTimeout = setInterval(()=>{
        //     setDebounceTerm(value)
        // },500)

        return (()=>{
            clearTimeout(thisTimeout)
            // clearInterval(thisTimeout)
        })

    },[value])

    return debouncedTerm;

}

const Debounce = () => {

    const [serachedTerm, setSearchedTearm] = useState('');

    const debouncedTerm =  useDebounce(serachedTerm);

    useEffect(()=>{
        getSomeData()
    },[debouncedTerm])

    const getSomeData = () =>{
        console.log('Api is called...');
    }

    return (
        <div>
            <h5>Debouncing in react with custom Hook...</h5>
            <input
                name='name'
                placeholder='Enter something...'
                value={serachedTerm}
                onChange={(e)=>{setSearchedTearm(e.target.value)}}
            ></input>
        </div>
    )
}

export default Debounce
