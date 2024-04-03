import './Bottle.css';

const Bottle = ({bottle,handleButton}) => {
    const {name,img,price}=bottle;
    return (
        <div className="bottle">
            <h3>Name :{bottle.name}</h3>
         <img src={img} alt="" />
            <h3>Price :{bottle.price}</h3>
            <button onClick={()=>handleButton(bottle)} className="btn btn-c">Buy </button>
        </div>
    );
};

export default Bottle;