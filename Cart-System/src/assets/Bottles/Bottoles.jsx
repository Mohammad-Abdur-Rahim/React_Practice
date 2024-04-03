import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottoles.css'

const Bottoles = () => {
const [bottles,setBottles]=useState([]);
const [cart,setCart]=useState([]);

const handleButton=(bottle) => {
    const newCart=[...cart,bottle];
    setCart(newCart);
}

useEffect(()=>{
fetch('Bottles.json')
.then(res=>res.json())
.then(data=>setBottles(data));

},[])
    return (
        <div>
            <h1>Bootles Here : {bottles.length}</h1>
            <h4>Cart:{cart.length}</h4>
           <div className="bottole-container">
           {
                bottles.map(bottle =><Bottle key={bottle.id} bottle={bottle} handleButton={handleButton}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottoles;