//Esta é a forma de declarar uma exportação default
// export default somar

// function somar(numero1, numero2){
//     return numero1 + numero2;
// }

//Quando a exportação é nomeada é o mesmo que usamos antes com as chaves, retirando o default
export { somar }

function somar(numero1, numero2){
    return numero1 + numero2;
}