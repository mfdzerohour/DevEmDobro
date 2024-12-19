//FORMA NORMAL
// let orderns = [
//                 {cliente: 'Rooberto', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},          
//                 {cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},          
//                 {cliente: 'Rafael', tipo: 'venda', quantidade: 21, ativo: 'GOGL34'}          
//             ]

//             let quantidadeDeOrdens = 0

//             for (let i = 0; i < orderns.length; i++) {
//                 quantidadeDeOrdens += orderns[i].quantidade
//             }

//             console.log(quantidadeDeOrdens)

// ********************************************************************************************** //

//Reduce
let ordens = [
                {cliente: 'Rooberto', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},          
                {cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},          
                {cliente: 'Rafael', tipo: 'venda', quantidade: 21, ativo: 'GOGL34'} 
            ]

// let quantidadeDeOrdens = orderns.reduce(function(VARIAVEL ARMAZENA RESULTADO, ordem){

// }, 0 /* VALOR INICIAL da quantidadeDeOrdens */)

// let quantidadeDeOrdens = ordens.reduce(function(somaDasOrdens, ordem){
//     console.log('Soma: ', somaDasOrdens, ordem)
//     return somaDasOrdens + ordem.quantidade
// }, 0 /* VALOR INICIAL da quantidadeDeOrdens */)

//resumindo reduce
let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem) => somaDasOrdens + ordem.quantidade , 0)

console.log(quantidadeDeOrdens)