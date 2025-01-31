import "./ButtonColor.css";
import React from 'react';

function ButtonColor({onClick}){
    return(
        <>
            <button className="btn" onClick={onClick}>Mudar cor texto</button>
        </>
    )
}

export default ButtonColor;