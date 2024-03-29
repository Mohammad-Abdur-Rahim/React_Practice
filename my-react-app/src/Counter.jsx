import { useState } from "react"

export default function Counter(){
    const [count,setcount]=useState(0);
    const handleAdd =()=>{
        const newcount =count+1;
        setcount(newcount)
    }
    const handleRemove =()=>{

        const newcount =count-1;
        setcount(newcount)
    }
    return(
        <div>
        <h3>Count : {count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        </div>
    )
}