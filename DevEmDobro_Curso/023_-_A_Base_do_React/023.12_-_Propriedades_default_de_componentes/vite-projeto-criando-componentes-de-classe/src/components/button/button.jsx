//Classe tem que ter esta propriedade
// import React from 'react'
import React from 'react'
import './button.css'

//Botão normal
// const Button = () =>{
//     return <button className='btn'>Clique aqui</button>
// }

//Botão com props de função
// const Button = (props) =>{
//     return <button className='btn'>{props.label}</button>
// }

//Botão com props de classe
class Button extends React.Component{
    //Quando usa classe tem que usar o this.
    //E tem que ter:
    // import React from 'react'
    render(){
        return <button className='btn'>{this.props.label}</button>
    }
}

// Propriedades DEFAULT do botão, quando não informo label
Button.defaultProps = {
    label: 'Clique aqui com classe'
}

export default Button