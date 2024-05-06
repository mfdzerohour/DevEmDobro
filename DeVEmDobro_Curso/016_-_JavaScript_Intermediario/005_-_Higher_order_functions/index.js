// const calcularAnoDenascimento = function (idade, mesDeNascimento, imrpimir){
//     const mesAtual = 5
//     let anoDeNascimento = 2024 - idade

//     if(mesDeNascimento > mesAtual) anoDeNascimento--
//     imrpimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento =>{
//     alert('Seu ano de nascimento é: ' + anoDeNascimento)
// }

// calcularAnoDenascimento(41, 9, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)
let quintuplicar = multiplicar(5)
let sextuplicar = multiplicar(6)

alert('2 * 3 = ' + dobrar(3))
alert('3 * 3 = ' + triplicar(3))
alert('4 * 3 = ' + quadruplicar(3))
alert('5 * 3 = ' + quintuplicar(3))
alert('6 * 3 = ' + sextuplicar(3))