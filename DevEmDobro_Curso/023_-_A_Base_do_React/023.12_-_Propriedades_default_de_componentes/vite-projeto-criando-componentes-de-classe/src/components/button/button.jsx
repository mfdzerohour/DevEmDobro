import './button.css'

//Botão normal
// const Button = () =>{
//     return <button className='btn'>Clique aqui</button>
// }

//Botão com props
const Button = (props) =>{
    return <button className='btn'>{props.label}</button>
}

export default Button