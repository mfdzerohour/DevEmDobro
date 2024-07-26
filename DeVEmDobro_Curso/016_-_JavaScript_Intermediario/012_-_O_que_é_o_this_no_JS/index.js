'use strict'

// console.log(this)
// console.log(window)
// console.log(window === this)

// this.name = 'Marcelo'

// function saudar(){
//     console.log('This no contexto da funcao', this)
//     console.log('Olá, ' +this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Marcelo',
//     saudar: function() {
//         console.log('This no contexto do método', this)

//         console.log('This.name no contexto do método', this.nome)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexto do objeto comida ', this)
    this.temperatura = temperaturaDeCozimento
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)