// //função anonima
// let resultadoDaSoma = function(numero1, numero2) {
//     return numero1 + numero2
// }

// console.log(resultadoDaSoma(12,5))

// ************************************************************** //

//Arrow functions
//Ela é uma funcao anonima e usa o => (Arrow/Seta)
//Tira o nome function e acrescentar no final =>

// let resultadoDaSoma = (numero1, numero2) => {
//     return numero1 + numero2
// }

// console.log(resultadoDaSoma(12,5))

// ************************************************************** //

//Quando é apenas um parâmetro, pode tirar os parenteses
// Foi adicionado o || para caso o nome seja vazio ele colocar um texto com Quester
// const incentivarQuester = nomeQuester => {
//     console.log(`Parabéns, ${nomeQuester || 'Quester'} você chegou ao módulo de JS intermediário`)
// }

// const nomeQuester = prompt('Qual seu nome?')

// incentivarQuester(nomeQuester)

// ************************************************************** //
//Deixando mais simplificado arrow functions acima tirando {}
// Foi adicionado o || para caso o nome seja vazio ele colocar um texto com Quester
// const incentivarQuester = nomeQuester => console.log(`Parabéns, ${nomeQuester || 'Quester'} você chegou ao módulo de JS intermediário`)


// const nomeQuester = prompt('Qual seu nome?')

// incentivarQuester(nomeQuester)

// ************************************************************** //
//É possivel reduzir (simplificar) as arrow functions
// Quando a mesma possui apenas uma linha, tira {} e o return, colocando na frente => sem o return

/*
    O original era assim:

    let resultadoDaSoma = function(numero1, numero2) {
        return numero1 + numero2
    }
*/

//E simplificado ficou assim:

let resultadoDaSoma = (numero1, numero2) =>  numero1 + numero2

console.log(resultadoDaSoma(12,5))