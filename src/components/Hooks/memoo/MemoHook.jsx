import { useMemo, useState } from "react"

export const MemoHook = () => {

    const [count, setCount] = useState(0)
    const [todo,setTodo] = useState([])



    const calculation = useMemo(()=>{
        return expensiveCalculation(count)
    },[count])


    const addTodo = () =>{
        const name = 'New Todo ' + todo.length;
        setTodo([...todo, name])
    }



    const handleSum = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h4>useMemo Hook </h4>
            <ul>
                {
                    todo.map((x)=>(
                        <li>{x}</li>
                    ))
                }
            </ul>

            <button onClick={addTodo}>Add Todo</button>



            <p>==================================</p>
            <h4>{count} </h4>
            <button onClick={handleSum}>Click</button>
            <p>{calculation}</p>
        </>
    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};