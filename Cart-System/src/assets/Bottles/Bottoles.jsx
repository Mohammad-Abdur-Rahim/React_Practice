import { useState } from "react";
import { useEffect } from "react";

const Bottoles = () => {
const [bottles,setBottles]=useState([]);
useEffect(()=>{
fetch('Bottles.json')
.then(res=>res.json())
.then(data=>setBottles(data));

},[])
    return (
        <div>
            <h1>Bootles Here : {bottles.length}</h1>
        </div>
    );
};

export default Bottoles;