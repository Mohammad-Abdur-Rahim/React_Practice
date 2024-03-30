import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'



const Countries = () => {
    const [countries,setCountries] =useState([]);
    const [flag,setFlag]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
    },[]);
   
    const handleFlag=(flag)=>{
         console.log("Flag Add")
    }
    return (
      
        <div className="Countries-container">
            {
                countries.map(country => <Country key={country.cc3a} country={country}
                    handleFlag={handleFlag}
                ></Country>)
                
            }
        </div>
    );
};

export default Countries;