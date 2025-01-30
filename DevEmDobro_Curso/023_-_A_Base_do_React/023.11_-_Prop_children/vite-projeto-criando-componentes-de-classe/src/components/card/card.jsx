// import React from 'react'
import './card.css'

// class Card extends React.Component{
//     render(){
//         return (
//             <div className="card">
//                 <h3>{this.props.title}</h3>
//                 <p>Esse é um texto do card</p>
//             </div>
//         )
//     }
// }

//Usando funções de classe
// const card = (props) => {
//     return (
//         <div className="card">
//             <h3>{props.title}</h3>
//             <p>Esse é um texto do card</p>
//         </div>
//     )
// }

//Usando funções de classe
const Card = ({ title }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Esse é um texto do card</p>
        </div>
    )
}

export default Card;