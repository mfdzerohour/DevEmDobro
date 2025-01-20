// const mensagem = 'Olá'
// console.log(mensagem)

// if (true) {
//     const mensagem = 'Oi'
// }
// console.log(mensagem)

// ************************************************************** //

//Escopo de bloco código CONST e LET
// IF, WHILE, DO WHILE, FOR
// if (true) { //Bloco de Código
//     Esta parte só é vista aqui e não fora daqui
// }

// ************************************************************** //

//BLOCO DE CÓDIGO AUTONOMO
// {
//      Quando sab abre COLCHETES tem o mesmo funcionamento
//      que o anterior
// }

//O VAR funciona tanto dentro quanto fora do escopo normal

// ************************************************************** //

//ESCOPO DE FUNÇÃO
// Quando é uma função  o VAR fica "preso" dentro da função, não sai 
// com os valores para fora da função, igual ocorre com o escopo 
// de bloco de código
// function falar() {
//     var mensagem = 'Olá Mundo!'
//     console.log(mensagem)
// }

// falar()
// console.log(mensagem) //Não excecuta, pois o escopo de função

// ************************************************************** //

//Uma função dentro de outra função também ficaria preso ao escopo 
//da função que ela foi criada

// function falar() {
//     var mensagem = 'Olá Mundo!'
//     console.log(mensagem)
//     function falarOutraCoisa() {

//     }
//     falarOutraCoisa()
//     console.log(falarOutraCoisa)
// }

// falar()
// // console.log(mensagem) //Não excecuta, pois o escopo de função
// console.log(falarOutraCoisa) //Não excecuta, pois o escopo de função

// ************************************************************** //

//ESCOPO GLOBAL
//Esta variavel foi colocado no HTML com SCRIPT no BODY, tem valor 
//global pego em qualquer lugar do código
console.log(url)

//Se declarar uma variavel "SOLTA" ela também será global, não 
//estando em um escopo

let numero = 123
console.log(numero)