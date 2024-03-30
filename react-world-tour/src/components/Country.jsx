import './Country.css'
const Country = ({country}) => {
    const {name,flags}=country;
    console.log(name);
  
    return (
        <div className="country">
            <h2>Name:{name?.common}</h2>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;