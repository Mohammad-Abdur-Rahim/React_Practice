import { useState } from "react"

export default function Counter(){
    const [count,setcount]=useState(0);
    const handleAdd =()=>{
        setcount(count+1)
    }
    const handleRemove =()=>{
        setcount(count-1)
    }
    return(
        <div>
        <h3>Count : {count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        </div>
    )
}