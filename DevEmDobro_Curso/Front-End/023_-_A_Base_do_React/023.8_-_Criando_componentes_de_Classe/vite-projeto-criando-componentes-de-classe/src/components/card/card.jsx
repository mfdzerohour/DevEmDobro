import React from "react";
import './card.css'

class Card extends React.Component{
    render(){
        return (
            <div className="card">
                <h3>TItulo</h3>
                <p>Esse é um texto do card</p>
            </div>
        )
    }
}

export default Card