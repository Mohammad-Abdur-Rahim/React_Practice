import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottoles.css'

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
           <div className="bottole-container">
           {
                bottles.map(bottle =><Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottoles;