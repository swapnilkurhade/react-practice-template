import React, { useId } from 'react'

const IdHook = () => {

    const id = useId();
    const Rfid = useId();

    console.log('id',id,Rfid);
    

    return (
        <div>
            <h4>UseId Hook </h4>
            <div>
                <label htmlFor={id}>Name</label>
                <input id={id} name='name' placeholder='Enter...'></input>
            </div>
        </div>
    )
}

export default IdHook
