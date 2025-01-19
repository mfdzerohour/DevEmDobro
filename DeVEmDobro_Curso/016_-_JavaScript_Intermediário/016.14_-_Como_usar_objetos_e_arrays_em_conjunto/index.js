// let jogo1 = {
//     nome:'Final fantasy'
// }

// let jogo2 = {
//     nome:'Fallout'
// }

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     // jogos: ['Final fantasy', 'Fallout', 'Fifa 21']
//     jogos: [jogo1, jogo2]
    
//     //No exemplo abaixo é misto, colocando a propriedade e o array
//     //jogos: [{nome:'Final fantasy'}, jogo2]
    
//     //Colocando assim, que também daria certo, as três opções 
//     //fazem a mesma coisa
//     //jogos:  [   {nome:'Final fantasy'}, 
//     //            {nome:'Fallout'}
//     //        ]
// }

// //Adicionando um jogo após a declação do video game
// //Criar um jogo3
// let jogo3 = {
//     nome:'Fifa 21'
// }

// //Chamar o Objeto (videoGame) e a propriedade (jogos) e adicionar 
// //o jogo3 com o comando push que adiciona no final do array
// videoGame.jogos.push(jogo3)

// console.log(videoGame)

// ***************************************************************** //

let cliente = {
    nome: "Ricardo",
    ultimoPedido : {
        produto: 'XBox',
        valor: 3000,
        jogos: [
            {nome: 'Fifa 21'},
            {nome: 'Command Conqueest'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)