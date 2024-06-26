import { useState } from 'react';
import './Country.css'
const Country = ({country,handleFlag}) => {
    const {name,flags,population,area,cca3}=country;
 const [visited,setVisited] = useState(false);
 const handleVisited =()=>{
    setVisited(!visited);
 }
  
    return (
        <div className="country">
            <h2>Name:{name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>Visited</button>
            <button onClick={()=>handleFlag(country.flags.png)}>Add Flag</button>
            {
                visited?" visited Done":" Pendings"
            }
        </div>
    );
};

export default Country;