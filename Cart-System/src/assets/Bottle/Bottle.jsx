import './Bottle.css';

const Bottle = ({bottle}) => {
    const {name,img,price}=bottle;
    return (
        <div className="bottle">
            <h3>Name :{bottle.name}</h3>
         <img src={img} alt="" />
            <h3>Price :{bottle.price}</h3>
        </div>
    );
};

export default Bottle;