import React from 'react';
import { add, divideFirstNumberToSecondNumber as divided, multi } from '../Utils/Calculate';
// import add from '../Utils/Calculate';

const Watch = () => {
    const num1=20;
    const num2=40;
    const sum =add(num1,num2);
    const multiSum =multi(num1,num2);
    const divide =divided(num1,num2);
    return (
        <div>
            
        </div>
    );
};

export default Watch;