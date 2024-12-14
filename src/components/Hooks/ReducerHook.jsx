import { useReducer } from "react"

export const ReducerHook = () =>{

    const reducerFn = (state, action) =>{
        switch (action) {
            case 'increment':
                return {count : state.count + 1};
                break;
            case 'decrement':
                return {count : state.count - 1};
                break;
            default:
                throw new Error('New error')
            break;
        }
    }

    const [state,dispatch] = useReducer(reducerFn,{count:0})

    return (
        <>
            <h1>Count : {state.count}</h1>
            <button onClick={()=>{dispatch('increment')}}>Increment</button>
            <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
            <button onClick={()=>{dispatch('decremessnt')}}>None</button>

        </>
    )
}