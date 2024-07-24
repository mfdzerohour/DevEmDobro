// idade = prompt ("Informe a sua idade ")
// mesDeNascimento = prompt ("Informe seu mês de nascimento ")

// const calcularAnoDenascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 7
//     let anoDeNascimento = 2024 - idade

//     if(mesDeNascimento > mesAtual) anoDeNascimento--
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento =>{
//     alert('Seu ano de nascimento é: ' + anoDeNascimento)
// }

// calcularAnoDenascimento(idade, mesDeNascimento, imprimirAnoDeNascimento)


let multiplicador = prompt("Informe o tipo de multiplicação por: 2, 3, 4, 5 ou 6: ")
let numero = prompt("Informe o numero inteiro: ")

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

alert(multiplicador + ' * ' + numero + ' = ' + multiplicador * numero)