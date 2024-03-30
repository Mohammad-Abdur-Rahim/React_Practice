import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'



const Countries = () => {
    const [countries,setCountries] =useState([]);
    const [visitedFlag,setFlag]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
    },[]);
   
    const handleFlag=(flag)=>{
         const newVisitedFlag=[...visitedFlag,flag];
         setFlag(newVisitedFlag)
    }
    return (
        <>
      <div className="flag-container">
        {
            visitedFlag.map(flag=> <img src={flag}></img> )
        }
      </div>
        <div className="Countries-container">
            {
                countries.map(country => <Country key={country.cc3a} country={country}
                    handleFlag={handleFlag}
                ></Country>)
                
            }
        </div>
        </>
    );
};

export default Countries;