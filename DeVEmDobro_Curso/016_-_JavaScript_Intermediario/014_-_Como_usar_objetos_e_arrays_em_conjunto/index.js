//Exemplo 1
// let jogo1 = {
//     nome: 'Final Fantasy'
// }

// let jogo2 = {
//     nome: 'Fallout'
// }

// let videoGame = {
//     nome: 'XBox',
//     valor: 3000,
//     jogos: [jogo1, jogo2]

//     //Tem a mesma função da linha acima
//     // jogos: [ 
//     //             {nome: 'Final Fantasy'}, 
//     //             {nome: 'Fallout'} 
//     //         ]
// }

// console.log(videoGame)

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)


//Exemplo 2
let cliente = {
    nome: 'Marcelo',
    ultimoPedido: {
        produto: 'X-Box',
        valor: 3000,
        jogos: [
                {nome: 'Fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)
console.log(cliente.ultimoPedido.valor)