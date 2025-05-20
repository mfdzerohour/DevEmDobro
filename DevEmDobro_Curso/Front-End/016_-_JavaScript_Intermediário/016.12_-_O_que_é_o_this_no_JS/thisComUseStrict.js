// 'use strict'
// // console.log(this)
// console.log(window)
// console.log(window === this)

// this.name = 'Ricardo'
// function saudar(){
//     console.log('this no contexto da função', this)
//     console.log('Olá,' + this.name)
// }

// saudar()

// ************************************************************** //

// let usuario = {
//     nome: 'Ricardo',
//     saudar: function(){
//         console.log('this no contexto do metodo', this)
        
//         console.log('this.nome no conexto do metodo', this.nome)
//     }
// }

// usuario.saudar()

// ************************************************************** //

let comida = {
    nome: 'Brócolis',
    temperatura: 0,
    //Mesma coisa da instrução fora do objeto
    // cozinhar: function(/*comidaParaCozinhar,*/ temperaturaDeCozimento){
    //     console.log('This no conexto do objeto comida', this)
    //     // comidaParaCozinhar.temperatura = temperaturaDeCozimento;
    //     this.temperatura = temperaturaDeCozimento;
    // }
}

comida.cozinhar = function(/*comidaParaCozinhar,*/ temperaturaDeCozimento){
    console.log('This no conexto do objeto comida', this)
    // comidaParaCozinhar.temperatura = temperaturaDeCozimento;
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

// comida.cozinhar(comida, 100)
comida.cozinhar(100)

console.log(comida)