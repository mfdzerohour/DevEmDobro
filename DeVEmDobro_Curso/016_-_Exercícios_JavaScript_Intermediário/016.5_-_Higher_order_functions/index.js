// const mesAtual = prompt('Informe o mês atual: ')
// const mesDeNascimento = prompt('Informe o mês atual: ')
// let idade = prompt('Informe a sua idade: ')

const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
    const mesAtual = 2
    let anoDeNascimento = 2021 - idade

    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento =>{
    console.log(`Seu ano de nascimento é: ${anoDeNascimento}`)
}

calcularAnoDeNascimento(33, 3, imprimirAnoDeNascimento)

//CONTINUAR 06:54